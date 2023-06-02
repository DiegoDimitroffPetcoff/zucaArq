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
});

module.exports = mongoose.model("contact", contactSchema);
