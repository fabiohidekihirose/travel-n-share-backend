import express, { Express } from "express";

const server: Express = express();

const serverEndpoints = () => {
  server.get("");

  return server;
};

export { serverEndpoints };
