const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  subscribed: {
    type: Boolean,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  id: {
    type: Number,
    required: false,
    default: undefined,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Ticket', TicketSchema);
