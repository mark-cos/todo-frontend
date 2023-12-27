import { client, connDB } from '@/libs/mongodb';
import { Task } from '@/types/task/task.type';

export async function GET() {
  try {
    const collection = await connDB<Task[]>('tasks');
    const tasks = await collection.find().toArray();

    return Response.json(tasks);
  } catch (e) {
    console.error(e);
  } finally {
    if (client) client.close();
  }
}
