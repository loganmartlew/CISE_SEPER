const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Practice = mongoose.model('practice', practiceSchema);

module.exports = { Practice, practiceSchema };
