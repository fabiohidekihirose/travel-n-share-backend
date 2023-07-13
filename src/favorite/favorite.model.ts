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
              id: true,
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

export async function createFavorite(payload: FavoriteProps) {
  return db.favorite.create({
    data: payload,
  });
}

export async function deleteFavorite(post_id: number, uid: string) {
  return db.favorite.delete({
    where: {
      user_id_post_id: {
        user_id: uid,
        post_id,
      },
    },
  });
}
