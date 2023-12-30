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

// Test the Vercel
app.get("/", (req, res) => {
	res.send("You succeeded to deploy backend to Vercel!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});