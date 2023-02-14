const express = require('express');
const ogrenciRouter=require("./routers/ogrenci");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser =require("body-parser");

const app = express();

app.use(bodyParser.json());
mongoose.connect(
    "mongodb+srv://ogrenciPanel:oEH6FWmFKhbtejfn@cluster0.onfakyl.mongodb.net/?retryWrites=true&w=majority",

    (e) => {
      if (e) {
        console.log(e);
      } else {
        console.log("Connected to database");
      }
    }
  );

app.use("/ogrenci",ogrenciRouter);

app.listen(5000, () => {
  console.log(`Server started on port 5000`);
});