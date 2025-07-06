const {response} = require('express');
const User = require('../models/User.model');

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.find()
    } catch (err){
      return res.status(400).json({
      msg: "User / Password are incorrect",
    });
    }
}