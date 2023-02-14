const mongoose = require("mongoose");

const OgrenciSchema = new mongoose.Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
   
  });

  
module.exports = mongoose.model("Ogrenci", OgrenciSchema);