import { Response, Request } from "express";
import * as favoriteModel from "./favorite.model";

export async function index(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    const favPosts = await favoriteModel.getFavPostsByUser(uid);

    res.status(200).send(favPosts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function save(req: Request, res: Response) {
  try {
    const payload = req.body;
    await favoriteModel.createFavorite(payload);

    res.status(200);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { post_id, uid } = req.params;
    await favoriteModel.deleteFavorite(parseInt(post_id), uid);

    res.status(200);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
