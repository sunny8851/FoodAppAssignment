const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("./db/connection");
app.use(require("../server/auth"));
app.get("*", (res, req) => {
  req.status(404).send("error");
});
app.listen(5000, () => {
  console.log("server listening on 5000");
});
