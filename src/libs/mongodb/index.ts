import { MongoClient, ServerApiVersion } from 'mongodb';

const createClient = () =>
  new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URL || '', {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

let client: MongoClient | null = null;
export const connDB = async <T extends Object>(
  collectionName: string,
  dbName = 'todos',
) => {
  if (!client) client = await createClient();
  const db = await client.db(dbName);
  const collection = await db.collection<T>(collectionName);
  return collection;
};
