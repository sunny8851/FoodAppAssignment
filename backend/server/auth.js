const express = require("express");
const { Item } = require("../src/models/userSchema");
const router = express.Router();
require("../src/db/connection");

router.get("/", (req, res) => {
  res.send("Welcome");
});
// router.post("/additem", async (req, res) => {
//   console.log("object");
//   for (let i = 0; i < data.length; i++) {
//     const task = new Item({
//       id: data[i].id,
//       price: data[i].price,
//       name: data[i].name,
//       description: data[i].description,
//       label: data[i].id,
//       category: data[i].category,
//       image: data[i].image,
//     });
//     await task.save();
//   }
//   return res.status(200).json({ msg: "success" });
// });
router.get("/getitems", async (req, res) => {
  const userExist = await Item.find({});
  return res.status(200).json({ data: userExist });
});
router.post("/updateitem", async (req, res) => {
  const { id, price } = req.body;
  console.log(id, price);
  await Item.updateOne({ _id: id }, { $set: { price: price } });

  return res.status(200).json({ msg: "success" });
});

module.exports = router;
