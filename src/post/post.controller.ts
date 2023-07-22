import { Request, Response } from "express";
import * as postModel from "./post.model";

export async function index(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    const myPosts = await postModel.getPosts(uid);

    res.status(200).send(myPosts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function save(req: Request, res: Response) {
  try {
    const payload = req.body;
    await postModel.createPost(payload);

    res.status(200).send("");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { post_id } = req.params;
    await postModel.deletePost(parseInt(post_id));

    res.status(200).send("");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function feed(req: Request, res: Response) {
  try {
    const { id_list } = req.body;
    const feedPosts = await postModel.getFeed(id_list);

    res.status(200).send(feedPosts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function explore(req: Request, res: Response) {
  try {
    const { id_list } = req.body;
    const explorePosts = await postModel.getExplore(id_list);

    res.status(200).send(explorePosts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
