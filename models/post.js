const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  postId: String,
  title: String,
  contents: String,
  imgUrl: String,
  author: String
});

const post = mongoose.model('post', postSchema);
module.exports = post;