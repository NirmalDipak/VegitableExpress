const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { genrateBase64, decodeBase64 } = require('../services/util');
const secretKey = 'your-secret-key';

exports.login = async (req, res) => {
    const { phone_no, password } = req.body;

    const user = await userModel.getUser(decodeBase64(phone_no), decodeBase64(password));

    if (user.length!=0) {
        const token = jwt.sign({ id: user[0].ID, phone_no: user[0].Name }, secretKey, { expiresIn: '24h' });
        res.json({ token ,user: genrateBase64(JSON.stringify(user)),status:true });
    } else {
        res.status(200).json({ message: 'Invalid password',status:false  });
    }
};

exports.sendOtp = async (req, res) => {
    const { phone_no } = req.body;

    const user = await userModel.validatePhoneNo(decodeBase64(phone_no));

    if (user.length!=0) {
        res.json({ user: genrateBase64(JSON.stringify(user)),status:true });
    } else {
        res.status(200).json({ message: 'Invalid Phone Number',status:false  });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await userModel.getAllUser();
        res.json({ user: genrateBase64(JSON.stringify(user)),status:true  })

    } catch (error) {
        res.status(200).json({ message: error ,status:false });
    }
}

