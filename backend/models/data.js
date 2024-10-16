const { default: mongoose } = require("mongoose");

// Define a Mongoose Schema
const dataSchema = new mongoose.Schema({
  end_year: { type: String, default: "2024" },   // Example default value
  intensity: { type: Number, default: 0 },
  sector: { type: String, default: "General" },
  topic: { type: String, default: "Unknown" },
  insight: { type: String, default: "" },
  url: { type: String, default: "" },
  region: { type: String, default: "Global" },
  start_year: { type: String, default: "2023" },
  impact: { type: String, default: "" },
  added: { type: String, default: new Date().toISOString() }, // Example default to current date
  published: { type: String, default: "" },
  country: { type: String, default: "N/A" },
  relevance: { type: Number, default: 1 },
  pestle: { type: String, default: "Uncategorized" },
  source: { type: String, default: "Unknown" },
  title: { type: String, default: "Untitled" },
  likelihood: { type: Number, default: 1 },
});

  
  const Data = mongoose.model('Data', dataSchema);
  module.exports = Data;