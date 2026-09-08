const express = require('express');
const router = express.Router();
const Outage = require('../models/Outage');
const Fault = require('../models/Fault');
const Customer = require('../models/Customer');
const Meter = require('../models/Meter');

router.get('/', async (req, res) => {
  try {
    const activeOutages = await Outage.countDocuments({ status: 'reported' });
    const resolvedFaults = await Fault.countDocuments({ status: 'resolved' });
    const totalCustomers = await Customer.countDocuments();
    const meters = await Meter.find();
    const averageConsumption = meters.length > 0 ? meters.reduce((sum, m) => sum + (m.consumption || 0), 0) / meters.length : 0;
    res.json({ activeOutages, resolvedFaults, totalCustomers, averageConsumption: Math.round(averageConsumption) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
