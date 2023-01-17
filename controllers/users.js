const User = require('../models/user'); // 모델 가져온다

// 유저 생성
module.exports.create = async (req, res) => { // request에 대한 respond 처리
    try {
        const { userId, name, email, password } = req.body; // 각각에 매칭, req.body에 데이터가 들어있다
        const user = new User({ userId, name, email, password });
        await user.save(); // 데이터베이스에 저장, save할 때까지 기다린다

        return res.send(user);
    } catch(err) { // 예외처리
        return res.status(500).json({ message: err.message });
    }
};