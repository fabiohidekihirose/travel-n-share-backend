import { db } from "../utils/db.server";

interface PostProps {
  user_id: string;
  content: string;
}

export async function getMyPosts(uid: string) {
  return db.post.findMany({
    where: {
      user_id: uid,
    },
    select: {
      id: true,
      user: {
        select: {
          id: true,
          username: true,
          image: true,
        },
      },
      content: true,
      favorite: true,
    },
  });
}

export async function createPost(payload: PostProps) {
  return db.post.create({
    data: payload,
  });
}

export async function deletePost(post_id: number) {
  return db.post.delete({
    where: {
      id: post_id,
    },
  });
}
