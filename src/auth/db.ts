import { createDatabase } from "db0";
import { createStorage } from "unstorage";
import dbDriver from "unstorage/drivers/db0";
import postgresql from "db0/connectors/postgresql";

interface User {
  id: number;
  email: string;
  password?: string;
}

const database = createDatabase(postgresql({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD
}));

const storage = createStorage({ driver: dbDriver({ database: database }) });

export async function createUser(data: Pick<User, "email" | "password">) {
  const users = (await storage.getItem<User[]>("users:data")) ?? [];
  const counter = (await storage.getItem<number>("users:counter")) ?? 1;
  const user: User = { id: counter, ...data };
  await Promise.all([
    storage.setItem("users:data", [...users, user]),
    storage.setItem("users:counter", counter + 1),
  ]);
  return user;
}

export async function findUser({ email, id }: { email?: string; id?: number }) {
  const users = (await storage.getItem<User[]>("users:data")) ?? [];
  if (id) return users.find(u => u.id === id);
  if (email) return users.find(u => u.email === email);
  return undefined;
}