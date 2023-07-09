import { Response, Request } from "express";
import * as favoriteModel from "./favorite.model";

export async function index(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    const favPosts = await favoriteModel.getFavPosts(uid);

    res.status(200).send(favPosts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
