const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
require("./utils/connection");

const PORT = process.env.PORT || 4003;

//Global Middlewares
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

//Routes
const tweetRoute = require("./routes/tweetRoute.js");

//Initializing Routes
app.use("/api", tweetRoute);


app.listen(PORT, () => {
  console.log(`server is started at ${PORT}`);
});
