import { db } from "../utils/db.server";

export async function getFollowers(id: string) {
  return db.follow.findMany({
    where: {
      user_id_ed: id,
    },
    select: {
      user_er: {
        select: {
          id: true,
          username: true,
          full_name: true,
          image: true,
        },
      },
    },
  });
}

export async function getFollowing(id: string) {
  return db.follow.findMany({
    where: {
      user_id_er: id,
    },
    select: {
      user_ed: {
        select: { id: true, username: true, full_name: true, image: true },
      },
    },
  });
}
