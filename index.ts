import { serverEndpoints } from "./src/server";

const server = serverEndpoints();

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.info(`Travel N Share Server is listening to PORT: ${PORT}`);
});
