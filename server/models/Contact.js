const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: /[A-Za-z0-9]@/
  },
  message: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
