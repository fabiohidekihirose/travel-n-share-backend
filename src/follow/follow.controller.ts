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
    const id = req.params.id;
    const followers = await followModel.getFollowers(id);

    res.status(200).send(followers);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function following(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const following = await followModel.getFollowing(id);

    res.status(200).send(following);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
