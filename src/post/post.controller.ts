import { Request, Response } from "express";
import * as PostModel from "./post.model";

export async function index(req: Request, res: Response) {
  try {
    const { uid } = req.body;
    const myPosts = await PostModel.getMyPosts(uid);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
