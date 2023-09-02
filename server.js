const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const helmet = require("helmet")
const routes= require("./routes")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api",routes);
app.use("/api/blogs",express.static("./uploads"))

const url = process.env.DB_URL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected !!");
  })
  .catch((err) => {
    console.log(err);
    console.log("Database NOT CONNECTED");
  });

const port = process.env.PORT || 5000
app.listen(port ,()=>console.log(`Server is running on port : ${port}`))




