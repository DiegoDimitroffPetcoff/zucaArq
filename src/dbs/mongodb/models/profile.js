const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: Object,
 
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model('profile', profileSchema)
