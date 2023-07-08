import { db } from "../utils/db.server";

export async function getMyPosts(uid: string) {
  return db.post.findMany({
    where: {
      user_id: uid,
    },
    select: {
      id: true,
      user: {
        select: {
          username: true,
          image: true,
        },
      },
      content: true,
      favorite: true,
    },
  });
}
