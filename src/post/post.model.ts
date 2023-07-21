import { db } from "../utils/db.server";

interface PostProps {
  user_id: string;
  content: string;
  timestamp: string;
}

export async function getPosts(uid: string) {
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
      timestamp: true,
      comment: {
        select: {
          id: true,
          content: true,
          user: {
            select: {
              id: true,
              username: true,
              image: true,
            },
          },
        },
      },
    },
    orderBy: { timestamp: "desc" },
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

export async function getFeed(id_list: []) {
  return db.post.findMany({
    where: {
      user_id: {
        in: id_list,
      },
    },
    orderBy: {
      timestamp: "desc",
    },
    select: {
      id: true,
      content: true,
      user_id: true,
      timestamp: true,
      favorite: true,
      user: true,
      comment: {
        select: {
          id: true,
          content: true,
          user: {
            select: {
              id: true,
              username: true,
              image: true,
            },
          },
        },
      },
    },
  });
}

export async function getExplore(id_list: []) {
  return db.post.findMany({
    where: {
      NOT: {
        user_id: {
          in: id_list,
        },
      },
    },
    orderBy: {
      timestamp: "desc",
    },
    select: {
      id: true,
      content: true,
      user_id: true,
      timestamp: true,
      favorite: true,
      user: true,
      comment: {
        select: {
          id: true,
          content: true,
          user: {
            select: {
              id: true,
              username: true,
              image: true,
            },
          },
        },
      },
    },
  });
}
