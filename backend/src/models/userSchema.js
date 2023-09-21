const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  label: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});
const Item = mongoose.model("item", itemSchema);
module.exports = { Item };
