import { db } from "../utils/db.server";

interface CommentProps {
  user_id: string;
  post_id: number;
  content: string;
}

export async function createComment(payload: CommentProps) {
  return db.comment.create({
    data: payload,
  });
}
