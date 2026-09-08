const express = require('express');
const router = express.Router();
const Fault = require('../models/Fault');

router.get('/', async (req, res) => {
  try {
    const faults = await Fault.find().sort({ createdAt: -1 });
    res.json(faults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const fault = new Fault(req.body);
  try {
    const newFault = await fault.save();
    res.status(201).json(newFault);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const fault = await Fault.findById(req.params.id);
    Object.assign(fault, req.body);
    await fault.save();
    res.json(fault);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Fault.findByIdAndDelete(req.params.id);
    res.json({ message: 'Fault deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
