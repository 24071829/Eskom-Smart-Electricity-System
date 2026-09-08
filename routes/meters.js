const express = require('express');
const router = express.Router();
const Meter = require('../models/Meter');

router.get('/', async (req, res) => {
  try {
    const meters = await Meter.find();
    res.json(meters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const meter = await Meter.findById(req.params.id);
    if (!meter) return res.status(404).json({ message: 'Meter not found' });
    res.json(meter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const meter = new Meter(req.body);
  try {
    const newMeter = await meter.save();
    res.status(201).json(newMeter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const meter = await Meter.findById(req.params.id);
    Object.assign(meter, req.body);
    await meter.save();
    res.json(meter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
