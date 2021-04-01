const mongoose = require("mongoose");

const TopsSchema = mongoose.Schema({
    size: {
        type: String,
        enum: ['xsmall','small','medium','large','xlarge'],
        required: true,
        //default: undefined
    },
    // not required to use the schema, but if we use, fields are required
    required: false
    
});

const BottomsSchema = mongoose.Schema({
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
    }
});

const FormalShoeSchema = mongoose.Schema({
    style: {
        type: String,
        enum: ['oxford','loafer','derbie'],
        required: true,
        //default: ""
    },
    size: {
        type: Number,
        enum: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        required: true,
        //default: undefined
    }
});

const SneakerSchema = mongoose.Schema({
    style: {
        type: String,
        enum: ['lifestyle','running'],
        required: true,
        //default: ""
    },
    size: {
        type: Number,
        enum: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        required: true,
        //default: undefined
    }
});

const BootSchema = mongoose.Schema({
    style: {
        type: String,
        enum: ['heeled','laceup','chelsea'],
        required: true,
        //default: ''
    },
    size: {
        type: Number,
        enum: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        required: true,
        //default: undefined
    }
});

const JewelrySchema = mongoose.Schema({
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
    }
});

const BeltSchema = mongoose.Schema({
    waist: {
        type: Number,
        enum: [28, 30, 32, 34, 36],
        required: true,
        //default: undefined
    }
});

const WalletSchema = mongoose.Schema({
    style: { type: String, required: true, default: ""},
});


const ProductSchema = mongoose.Schema({
    serial_no: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number
    },
    image: {
        type: String
        //data: {Buffer, contentType: String}
        //type: URL
    },
    material: {
        type: String
    },
    color: {
        type: String
    },

    tops: [TopsSchema],
    bottoms: [BottomsSchema],
    formalshoe: [FormalShoeSchema],
    sneaker: [SneakerSchema],
    boot: [BootSchema],
    jewelry: [JewelrySchema],
    wallet: [WalletSchema],
    belt: [BeltSchema]
    
  
  //jewelry: {
  //    itemType: String,
  //    size: Number
//
  //  }

});


module.exports = mongoose.model("Products", ProductSchema);
