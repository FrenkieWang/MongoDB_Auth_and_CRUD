const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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


const usersRouter = require('./routes/userRoute');
app.use('/user', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});