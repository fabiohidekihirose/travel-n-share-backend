import express, { Express } from "express";
import * as userController from "./user/user.controller";
import * as followController from "./follow/follow.controller";
import * as postController from "./post/post.controller";
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
  server.get("/user/:id", userController.index);
  server.post("/register", userController.save);

  server.get("/user/:id/followers", followController.followers);
  server.get("/user/:id/following", followController.following);

  server.get("/user/:id/posts", postController.index);

  return server;
};

export { serverEndpoints };
