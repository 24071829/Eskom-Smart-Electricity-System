const mongoose = require('mongoose');

const meterSchema = new mongoose.Schema({
  meterNumber: { type: String, required: true, unique: true },
  customerName: String,
  customerId: mongoose.Schema.Types.ObjectId,
  currentReading: Number,
  previousReading: Number,
  consumption: Number,
  status: { type: String, enum: ['active', 'inactive', 'faulty'], default: 'active' },
  lastReadDate: Date,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Meter', meterSchema);
