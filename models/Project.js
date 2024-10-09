const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 5,
    max:100,
    required: true
  }
});

module.exports = mongoose.model("Project", ProjectSchema);