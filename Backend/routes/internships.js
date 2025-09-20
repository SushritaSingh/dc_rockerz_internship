const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship');

// GET all internships
router.get('/', async (req, res) => {
  const internships = await Internship.find();
  res.json(internships);
});

// POST a new internship
router.post('/', async (req, res) => {
  const newInternship = new Internship(req.body);
  await newInternship.save();
  res.status(201).json(newInternship);
});

module.exports = router;