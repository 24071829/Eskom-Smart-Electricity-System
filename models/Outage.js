const mongoose = require('mongoose');

const outageSchema = new mongoose.Schema({
  location: { type: String, required: true },
  description: { type: String, required: true },
  affectedCustomers: Number,
  estimatedDuration: Number,
  status: { type: String, enum: ['reported', 'investigating', 'resolved'], default: 'reported' },
  startTime: { type: Date, default: Date.now },
  endTime: Date,
  reportedBy: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Outage', outageSchema);
