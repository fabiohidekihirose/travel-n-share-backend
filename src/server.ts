import express, { Express } from "express";
import * as userController from "./user/user.controller";
import * as followController from "./follow/follow.controller";
import * as postController from "./post/post.controller";
import * as favoriteController from "./favorite/favorite.controller";
import cors from "cors";

const server: Express = express();

server.use(cors());

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, DELETE, PUT, PATCH"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

server.use(express.json());

const serverEndpoints = () => {
  server.get("/user/:uid", userController.index);
  server.post("/register", userController.save);
  server.patch("/user/:uid/update", userController.update);

  server.get("/user/:uid/followers", followController.followers);
  server.get("/user/:uid/following", followController.following);
  server.post("/user/:uid/following/create", followController.save);
  server.delete(
    "/user/:uid/following/:user_id_ed/delete",
    followController.remove
  );

  server.get("/user/:uid/posts", postController.index);
  server.post("/user/:uid/posts/create", postController.save);
  server.post("/user/:uid/feed", postController.feed);
  server.delete("/user/:uid/posts/:post_id/delete", postController.remove);

  server.get("/user/:uid/favorite", favoriteController.index);
  server.post("/user/:uid/favorite/create", favoriteController.save);
  server.delete(
    "/user/:uid/favorite/:post_id/delete",
    favoriteController.remove
  );

  return server;
};

export { serverEndpoints };
