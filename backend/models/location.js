const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Address: { type: String },
  Phone: { type: String },
  Devices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device' }],
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;