const mongoose = require("mongoose");

const TopsSchema = mongoose.Schema({
  //sizes will contain a list of every object size [xsmall,small,med,large,etc] and contain the stocks per that size
  sizes: [
    {
      size: {
        type: String,
        enum: ["xsmall", "small", "medium", "large", "xlarge"],
        required: true,
      },
      stock: { type: Number, required: true },
      _id: false,
    },
  ],

  // not required to use the schema, but if we use, fields are required
  required: false,
  _id: false,
});

const BottomsSchema = mongoose.Schema({
  sizes: [
    {
      waist: {
        type: Number,
        enum: [28, 30, 32, 34, 36],
        required: true,
        //default: undefined
      },
      length: {
        type: Number,
        enum: [28, 30, 32, 34, 36],
        required: true,
        //default: undefined
      },
      stock: { type: Number, required: true },
      _id: false,
    },
  ],
  _id: false,
});

const FormalShoeSchema = mongoose.Schema({
  sizes: [
    {
      style: {
        type: String,
        enum: ["oxford", "loafer", "derbie"],
        required: true,
        //default: ""
      },
      size: {
        type: Number,
        enum: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        required: true,
        //default: undefined
      },
      stock: { type: Number, required: true },
      _id: false,
    },
  ],
  _id: false,
});

const SneakerSchema = mongoose.Schema({
  sizes: [
    {
      style: {
        type: String,
        enum: ["lifestyle", "running"],
        required: true,
        //default: ""
      },
      size: {
        type: Number,
        enum: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        required: true,
        //default: undefined
      },
      stock: { type: Number, required: true },
      _id: false,
    },
  ],
  _id: false,
});

const BootSchema = mongoose.Schema({
  sizes: [
    {
      style: {
        type: String,
        enum: ["heeled", "laceup", "chelsea"],
        required: true,
        //default: ''
      },
      size: {
        type: Number,
        enum: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        required: true,
        //default: undefined
      },
      stock: { type: Number, required: true },
      _id: false,
    },
  ],
  _id: false,
});

const JewelrySchema = mongoose.Schema({
  sizes: [
    {
      style: {
        type: String,
        required: true,
        //default: ""
      },
      size: {
        type: Number,
        enum: [9, 10, 11],
        required: true,
        //default: undefined
      },
      stock: { type: Number, required: true },
      _id: false,
    },
  ],
  _id: false,
});

const BeltSchema = mongoose.Schema({
  sizes: [
    {
      waist: {
        type: Number,
        enum: [28, 30, 32, 34, 36],
        required: true,
        //default: undefined
      },
      stock: { type: Number, required: true },
      _id: false,
    },
  ],
  _id: false,
});

const WalletSchema = mongoose.Schema({
  sizes: [
    {
      style: { type: String, required: true, default: "" },
      stock: { type: Number, required: true },
      _id: false,
    },
  ],
  _id: false,
});

const ProductSchema = mongoose.Schema({
  serial_no: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    //data: {Buffer, contentType: String}
    //type: URL
  },
  material: {
    type: String,
  },
  color: {
    type: String,
  },

  tops: [TopsSchema],
  bottoms: [BottomsSchema],
  formalshoe: [FormalShoeSchema],
  sneaker: [SneakerSchema],
  boot: [BootSchema],
  jewelry: [JewelrySchema],
  wallet: [WalletSchema],
  belt: [BeltSchema],

  //jewelry: {
  //    itemType: String,
  //    size: Number
  //
  //  }
});

module.exports = mongoose.model("Products", ProductSchema);
