import { db } from "../utils/db.server";

export async function getFavPosts(uid: string) {
  return db.favorite.findMany({
    where: {
      user_id: uid,
    },
    select: {
      post: {
        select: {
          id: true,
          content: true,
          user: {
            select: {
              username: true,
              image: true,
            },
          },
          favorite: true,
        },
      },
    },
  });
}
