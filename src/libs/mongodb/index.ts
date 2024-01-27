import { MongoClient, ServerApiVersion } from 'mongodb';

const url = process.env.MONGODB_URL || '';
const createClient = () =>
  new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
export let client: MongoClient | null = null;

export const connDB = async <T extends Object>(
  collectionName: string,
  dbName = 'todos',
) => {
  client = createClient();
  const db = client.db(dbName);
  const collection = await db.collection<T>(collectionName);
  return collection;
};

declare module global {
  let _mongoClientPromise: Promise<MongoClient>;
  let client: MongoClient;
}

let clientPromise: Promise<MongoClient>;
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = createClient();
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = createClient();
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
