const express = require("express");
const router = express.Router();
const Account = require("../models/Account");
const Product = require("../models/Product");

router.get("/inventory", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/inventory/:_id", async (req, res) => {
  try {
    const item = await Product.findById(req.params._id);
    res.json(item);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/sign_in", (req, res) => {
  res.send("Sign In Page");
});

//send all registered accounts to this end point
router.get("/accounts", async (req, res) => {
  try {
    const posts = await Account.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/accounts/:_id", async (req, res) => {
  try {
    const account = await Account.findById(req.params._id);
    res.json(account);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/checkout", (req, res) => {
  res.send("Check out Page");
});

router.get("/cart", (req, res) => {
  res.send("Cart Page");
});

//update add post PUT orders to accounts!!!!!!!!!!!!!
router.patch("/:_id", async (req, res) => {
  try {
    const appendOrder = await Account.updateOne(
      { _id: req.params._id },
      {
        $push: {
          orders: [
            {
              address: req.body.orders[0].address,
              phone: req.body.orders[0].phone,
              cardNumber: req.body.orders[0].cardNumber,
              items: req.body.orders[0].items,
            },
          ],
        },
      }
    );
    res.json(appendOrder);
  } catch (err) {
    res.json({ message: err });
  }
});
//get orders

router.post("/register_user", async (req, res) => {
  //send to database
  const post = new Account({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    orders: req.body.orders,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }

  res.end();
});

router.post("/login_user", async (req, res) => {
  console.log("SIGN IN EMAIL: " + req.body.email);
  console.log("SIGN IN PASSWORD: " + req.body.password);

  try {
    const posts = await Account.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// add item from db
router.post("/products", async (req, res) => {
  //send to database
  const post = new Product({
    serial_no: req.body.serial_no,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    image: req.body.image,
    material: req.body.material,
    color: req.body.color,

    tops: req.body.tops,
    bottoms: req.body.bottoms,
    formalshoe: req.body.formalshoe,
    sneaker: req.body.sneaker,
    boot: req.body.boot,
    jewelry: req.body.jewelry,
    wallet: req.body.wallet,
    belt: req.body.belt,
  });

  try {
    const savedProduct = await post.save();
    res.json(savedProduct);
  } catch (error) {
    res.json({ message: error });
  }

  res.end();
});

router.delete("/:_id", async (req, res) => {
  try {
    const removeProduct = await Product.deleteOne({ _id: req.params._id });
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
