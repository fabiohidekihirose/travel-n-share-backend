import { db } from "../utils/db.server";

interface FavoriteProps {
  user_id: string;
  post_id: number;
}

export async function getFavPostsByUser(uid: string) {
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

export async function getFavPost(post_id: number, user_id: string) {
  return db.favorite.findUnique({
    where: {
      user_id_post_id: {
        user_id,
        post_id,
      },
    },
  });
}

export async function createFavorite(payload: FavoriteProps) {
  return db.favorite.create({
    data: payload,
  });
}

export async function deleteFavorite(post_id: number, user_id: string) {
  return db.favorite.delete({
    where: {
      user_id_post_id: {
        user_id,
        post_id,
      },
    },
  });
}
