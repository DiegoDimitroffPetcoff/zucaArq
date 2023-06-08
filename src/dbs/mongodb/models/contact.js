const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
  },
  adress: {
    type: String,
    trim: true,
  },
  facebook: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true,
  },
  cellphone: {
    type: Number,
    trim: true,
  },
  emailText: {
    type: String,
    trim: true,
  },
  adressText: {
    type: String,
    trim: true,
  },
  facebookText: {
    type: String,
    trim: true,
  },
  instagramText: {
    type: String,
    trim: true,
  },
  cellphoneText: {
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model("contact", contactSchema);
