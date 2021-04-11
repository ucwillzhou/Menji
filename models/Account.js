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
      order: [
        {
          itemId: { type: String },
          _id: false,
        },
      ],
    },
  ],
});
//SCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEM ON DEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
module.exports = mongoose.model("Accounts", AccountSchema);
