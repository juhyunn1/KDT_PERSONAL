const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ // 스키마(객체) 설정
  userId: Number,
  name: String,
  email: String,
  password: String,
});

// const user = {
//   userId: 1,
//   name: 'Go',
//   email: '@',
//   password: '1234'
// }
const user = mongoose.model('user', userSchema); // users라는 이름으로 컬렉션이 생성됨
module.exports = user; // user라는 이름으로 외부에서 쓸 수 있다