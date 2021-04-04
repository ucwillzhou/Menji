const express = require("express");
const router = express.Router();
const Account = require("../models/Account");
const Product = require("../models/Product");

router.get("/", (req, res) => {
  res.send("Main Page");
});

router.get("/admin", (req, res) => {
  res.send("Admin Page");
});

router.get("/admin/add", (req, res) => {
  res.send("Admin Page Add");
});

router.get("/clothing", (req, res) => {
  res.send("Clothing Page");
});

router.get("/footwear", (req, res) => {
  res.send("Footwear Page");
});

router.get("/accessories", (req, res) => {
  res.send("Accessories Page");
});

router.get("/inventory", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
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

router.get("/checkout", (req, res) => {
  res.send("Check out Page");
});

router.get("/cart", (req, res) => {
  res.send("Cart Page");
});

//

router.post("/register_user", async (req, res) => {
  console.log("First Name: " + req.body.first_name);
  console.log("Last Name: " + req.body.last_name);
  console.log("Email: " + req.body.email);
  console.log("Password: " + req.body.password);
  //send to database
  const post = new Account({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
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

module.exports = router;
