import { db } from "../utils/db.server";

export async function getMyPosts(uid: string) {
  return db.post.findMany({
    select: {
      id: true,
    },
  });
}
