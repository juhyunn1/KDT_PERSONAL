const express = require('express');
const router = express.Router();

const users = require('../controllers/users'); // 컨트롤러 가져온다

router.post('/', users.create); // post로 create한 거 들어오면 실행
// create >> post
// read >> get
// update >> put
// delete >> delete

module.exports = router; 