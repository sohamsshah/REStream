const mongoose = require('mongoose');
const { Schema } = mongoose;
const {categories} = require("./../data");

const CategorySchema = new Schema({
  thumbnail: String,
  redirect: String,
  category_name: String,
  name: String,
  description: String,
  tags: Array,
});

const Category = mongoose.model('Category', CategorySchema);

const addCategoriesToDB = () => {
  categories.forEach(async (category) => {
    const NewCategory = new Category(category);
    const savedCategory = await NewCategory.save();
    console.log(savedCategory);
  })
}

module.exports = { Category, addCategoriesToDB };