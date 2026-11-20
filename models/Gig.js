const mongoose = require('mongoose');

// schema for a gig posting
const gigSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  budget: { type: Number, required: true, min: 0 },
  description: { type: String, required: true, trim: true },
  postedBy: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Gig', gigSchema);
