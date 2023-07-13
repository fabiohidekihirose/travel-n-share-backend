import { Request, Response } from "express";
import * as userModel from "./user.model";

export async function index(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    const user = await userModel.getUser(uid);

    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function save(req: Request, res: Response) {
  try {
    const { id, full_name, username, email, image, bio } = req.body;

    const user = await userModel.create({
      id,
      full_name,
      username,
      email,
      bio,
      image,
    });

    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
