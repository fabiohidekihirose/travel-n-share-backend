import { Request, Response } from "express";
import * as userModel from "./user.model";

export async function index(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const user = await userModel.getUser(userId);

    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function save(req: Request, res: Response) {
  try {
    const { id, full_name, username, email, image } = req.body;

    const user = await userModel.create({
      id,
      full_name,
      username,
      email,
      image,
    });

    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
