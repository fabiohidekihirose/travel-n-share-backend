import { db } from "../utils/db.server";

interface User {
  id: string;
  email: string;
  username: string;
  full_name: string;
  image: string;
}

export async function getUser(id: string) {
  return db.user_account.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
      full_name: true,
      username: true,
      image: true,
      posts: true,
      followers: true,
      following: true,
    },
  });
}

export async function create(payload: User) {
  return db.user_account.create({
    data: payload,
    select: {
      id: true,
      email: true,
      full_name: true,
      username: true,
      image: true,
      posts: true,
      followers: true,
      following: true,
    },
  });
}