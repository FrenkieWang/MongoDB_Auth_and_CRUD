const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();
const port = process.env.PORT || 5000;
const mongoUrl = process.env.ATLAS_URI;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((e) => console.log(e));

app.use(express.urlencoded({ extended: false }));

const exercisesRouter = require('./routes/exercisesRoute');
const usersRouter = require('./routes/userRoute');

app.use('/exercises', exercisesRouter);
app.use('/user', usersRouter);

// 简单写一个接口
app.get("/", (req, res) => {
	res.send("这是一个Node express简单服务。");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});