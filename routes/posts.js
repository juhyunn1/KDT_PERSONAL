const express = require('express');
const router = express.Router();

const posts = require('../controllers/posts'); // 컨트롤러 가져온다

router.post('/', posts.create); // post로 create한 거 들어오면 실행

module.exports = router;