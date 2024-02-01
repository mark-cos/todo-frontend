FROM node:20.11-slim

ADD . /todo-fe
WORKDIR /todo-fe

ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET

ARG MONGODB_URL
ENV MONGODB_URL=$MONGODB_URL

ARG GOOGLE_CLIENT_SECRET
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET

ENV NODE_ENV production

RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
#RUN npm install -g pnpm
#RUN pnpm install

EXPOSE 3000

CMD ["node", "server.js"]