const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  orders: [
    {
      address: { type: String },
      phone: { type: Number },
      cardNumber: { type: Number, required: true },
      items: [
        {
          itemId: { type: String },
          _id: false,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Accounts", AccountSchema);
