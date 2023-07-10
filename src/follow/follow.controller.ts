import { Request, Response } from "express";
import * as followModel from "./follow.model";

export async function index(req: Request, res: Response) {
  try {
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function followers(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    const followers = await followModel.getFollowers(uid);

    res.status(200).send(followers);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function following(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    const following = await followModel.getFollowing(uid);

    res.status(200).send(following);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function save(req: Request, res: Response) {
  try {
    const payload = req.body;
    await followModel.createFollow(payload);

    res.status(200);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { user_id_ed, uid } = req.params;
    await followModel.deleteFollow(user_id_ed, uid);

    res.status(200);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
