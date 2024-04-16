const http = require("http");
const app = require("./app");
const PORT = 6000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Ogee server is running on port ${PORT}`);
});