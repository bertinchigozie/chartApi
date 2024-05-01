const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  start_year: {
    type: Number,
    default: ""
  },
  end_year: {
    type: Number,
    default: ""
  },
  intensity: Number,
  topic: String,
  sector: String,
  region: String,
  insight: String,
  impact: String,
  added: String,
  country: String,
  published: String,
  pestle: String,
  source: String,
  title: String,
  url: String,
  relevance: Number,
  likelihood: Number,
  city: {
    type: String,
    default: ""
  }
});

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
