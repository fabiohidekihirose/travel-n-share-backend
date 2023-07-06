import express, { Express } from "express";
import * as userController from "./user/user.controller";
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

  return server;
};

export { serverEndpoints };
