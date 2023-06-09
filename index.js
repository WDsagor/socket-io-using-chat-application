const express = require("express");
const cors = require("cors")
const app = express()
const  {Server}  = require("socket.io");
const  http  = require("http");
const port = process.env.PORT || 5000;
const server = http.createServer(app);

require("dotenv").config()
 app.use(cors());
 app.use(express.json())


 const io = new Server(server, {
  cors:{
    origin: "http://localhost:3000",
    methods: ["GET","POST"]
  },
});

io.on("connection", (socket) => {
  console.log(`User connected : ${socket.id}`)
});

 app.get("/", (req, res) => {
    res.send("port a kiu paowa jaitese");
  });



  

  server.listen(port, () => {
    console.log("bd connected", port);
  });