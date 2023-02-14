const express = require('express');
const ogrenciRouter=require("./routers/ogrenci");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser =require("body-parser");



const app = express();

app.use(bodyParser.json());
mongoose.connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.xnfsv.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    (e) => {
      if (e) {
        console.log(e);
      } else {
        console.log("Connected to database");
      }
    }
  );

app.use("/ogrenci",ogrenciRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});