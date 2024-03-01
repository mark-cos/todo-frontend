import clientPromise, { client, connDB } from '@/libs/mongodb';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { IUser, IUserInfo } from '../../types/auth';
import bcrypt from 'bcrypt';
import { Adapter } from 'next-auth/adapters';
import { NextAuthOptions } from 'next-auth';
import { ObjectId } from 'mongodb';

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.family_name}${profile.given_name}`,
          email: profile.email,
          font: 'inter',
          theme: 'dark',
          language: 'en',
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
        name: {},
      },

      async authorize(credentials, req) {
        try {
          const email = credentials!.email;
          const password = credentials!.password;

          // users, accounts 컬렉션을 userId기준으로 조인하여 email존재 유무 체크
          const collection = await connDB<IUser>('users');
          const userInfoAggregate = await collection.aggregate<IUserInfo>();
          const findUserInfo = await userInfoAggregate
            .lookup({
              from: 'accounts',
              localField: '_id',
              foreignField: 'userId',
              as: 'account',
            })
            .match({ email })
            .toArray();

          if (findUserInfo.length === 0 || findUserInfo.length > 1) {
            console.log('authorize not find user');
            return null;
          }

          let loginUser = findUserInfo[0];

          // 비밀번호 일치여부 체크
          const isPwCompare = bcrypt.compareSync(
            password,
            loginUser.account[0].password!,
          );
          if (!isPwCompare) {
            console.log('authorize password mismatch');
            return null;
          }
          return {
            id: loginUser._id?.toString()!,
            name: loginUser.name,
            email: loginUser.email,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: '/account/login',
    newUser: '/account/register',
    signOut: '/',
  },
  // debug: true,
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async session({ session, token }) {
      let user = null;
      try {
        const collection = await connDB<IUser>('users');
        user = await collection.findOne({ _id: new ObjectId(token.sub) });
      } catch (e) {
        console.info('🚀 _ file: authOptions.ts:99 _ session _ e:', e);
      } finally {
        await client?.close();
      }

      if (user) {
        session.user.font = user.font;
        session.user.language = user.language;
        session.user.image = user.image || user.image;
        session.user.theme = user.theme;
      }

      return session;
    },
    async signIn({ account, profile, user }) {
      return true;
    },
    async jwt({ token, account, profile }) {
      return token;
    },
  },

  adapter: MongoDBAdapter(clientPromise, {
    databaseName: 'todos',
  }) as Adapter,
};

export default authOptions;
