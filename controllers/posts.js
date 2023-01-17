const Post = require('../models/post'); // 모델 가져온다

// 포스트 생성
module.exports.create = async (req, res) => {
  try {
    const { postId, title, contents, imgUrl, author } = req.body;
    const post = new Post({ postId, title, contents, imgUrl, author });
    await post.save();

    return res.send(post);
  } catch(err) { // 예외처리
    return res.status(500).json({ message: err.message });
  }
};