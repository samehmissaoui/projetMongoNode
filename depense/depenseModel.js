const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const depenseSchema = new mongoose.Schema({
  nom: {
    type: String,
  },
  prix: {
    type: String,
    maxlength: 30,
  },

  date: {
    type: String,
  },
});

module.exports = mongoose.model("depense", depenseSchema);
