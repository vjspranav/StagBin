const mongoose = require("mongoose");

// instantiate a mongoose schema
const PasteSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  urlCode: {
    type: String,
    required: true,
    unique: true,
  },
  isUrl: {
    type: Boolean,
    default: false,
  },
  createdSystemID: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  lastModified: {
    type: String,
    default: Date.now,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

// create a model from schema and export it
module.exports = mongoose.model("Paste", PasteSchema);
