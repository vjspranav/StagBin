const mongoose = require("mongoose");

// instantiate a mongoose schema
const SystemIDSchema = new mongoose.Schema({
  date: {
    type: String,
    default: Date.now,
  },
});

// create a model from schema and export it
module.exports = mongoose.model("SystemID", SystemIDSchema);
