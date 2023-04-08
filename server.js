const http = require("http");
const app = require("./app/app");
const dbConnect = require("./config/dbConfig");
const { PORT } = require("./config/serverConfig");

//create a server using http
const server = http.createServer(app);

const runServer = async () => {
  await dbConnect(); //connect to the database before start listening
  server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
  });
};

runServer();
