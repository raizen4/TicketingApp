const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    trim: true,
  },
  Subscribed: {
    type: Boolean,
    required: true,
    trim: true,
  },
  Message: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  Id: {
    type: Number,
    required: false,
    default: undefined,
  },
  DateCreated: {
    type: String,
    default: undefined
  },
});

module.exports = mongoose.model('Ticket', TicketSchema);
