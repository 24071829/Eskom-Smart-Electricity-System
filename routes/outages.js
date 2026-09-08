const express = require('express');
const router = express.Router();
const Outage = require('../models/Outage');

router.get('/', async (req, res) => {
  try {
    const outages = await Outage.find().sort({ createdAt: -1 });
    res.json(outages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const outage = new Outage(req.body);
  try {
    const newOutage = await outage.save();
    res.status(201).json(newOutage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const outage = await Outage.findById(req.params.id);
    Object.assign(outage, req.body);
    await outage.save();
    res.json(outage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Outage.findByIdAndDelete(req.params.id);
    res.json({ message: 'Outage deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
