const mongoose = require('mongoose');

const faultSchema = new mongoose.Schema({
  faultType: { type: String, enum: ['transformer', 'line', 'meter', 'substation', 'other'], required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  severity: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
  status: { type: String, enum: ['reported', 'assigned', 'in_progress', 'resolved'], default: 'reported' },
  contactPerson: String,
  contactPhone: String,
  createdAt: { type: Date, default: Date.now },
  resolvedAt: Date,
});

module.exports = mongoose.model('Fault', faultSchema);
