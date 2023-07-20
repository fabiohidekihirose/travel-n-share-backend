import { Request, Response } from "express";
import * as commentModel from "./comment.model";

export async function save(req: Request, res: Response) {
  try {
    const payload = req.body;
    await commentModel.createComment(payload);

    res.status(200).send("");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
