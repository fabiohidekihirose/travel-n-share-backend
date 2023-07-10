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

export async function view(req: Request, res: Response) {
  try {
    const { post_id, user_id } = req.body;

    await favoriteModel.getFavPost(parseInt(post_id), user_id);
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
    const { post_id, user_id } = req.params;
    console.log("Here");

    await favoriteModel.deleteFavorite(parseInt(post_id), user_id);

    res.status(200);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
