const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      pulic_id: String,
      secure_url: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model('project', projectSchema)
