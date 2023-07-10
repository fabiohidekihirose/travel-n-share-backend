import { db } from "../utils/db.server";

interface FollowProps {
  user_id_ed: string;
  user_id_er: string;
}

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

export async function createFollow(payload: FollowProps) {
  return db.follow.create({
    data: payload,
  });
}

export async function deleteFollow(user_id_ed: string, user_id_er: string) {
  return db.follow.delete({
    where: {
      user_id_ed_user_id_er: {
        user_id_ed,
        user_id_er,
      },
    },
  });
}
