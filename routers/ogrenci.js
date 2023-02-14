const express = require("express");
const Ogrenci = require("../models/Ogrenci");

const router=express.Router();
console.log("ogrenci sayfasındasınız test");
//listeleme
router.get("/", (req, res) => {
    Ogrenci.find()
      .then((ogrenci) => {
        res.json(ogrenci);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //id ile sorgulma veya çağırma
  router.get("/:id", (req, res) => {
    Ogrenci.findById(req.params.id)
      .then((ogrenci) => {
        res.json(ogrenci);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //create ogrenci ekleme
  router.post("/", (req, res) => {
    const ogrenci = new Ogrenci({
      name: req.body.name,
      class: req.body.class,
      school: req.body.school,
      description: req.body.description,
      user: req.userId,
    });
    ogrenci.save();
    res.json(ogrenci);
  });
  //update ogrenci bilgi güncelleme
  router.put("/:id", (req, res) => {
    Ogrenci.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      class: req.body.class,
      school: req.body.school,
      description: req.body.description,
    })
      .then((ogrenci) => {
        res.json(ogrenci);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //delete ogrenci bilgi silme
  router.delete("/:id", (req, res) => {
    Ogrenci.findByIdAndDelete(req.params.id)
      .then((ogrenci) => {
        res.json(ogrenci);
      })
      .catch((err) => {
        res.json(err);
      });
  });
module.exports=router;
