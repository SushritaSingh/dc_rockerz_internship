const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  title: String,
  company: String,
  stipend: Number,
  location: String,
  skills: [String]
});

module.exports = mongoose.model('Internship', internshipSchema);