const {response} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                message: "User / Password are incorrect",
            });
        }
        const isMatch = await bcrypt.compare( password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "User / Password are incorrect",
            });
        }

        res.status(200).json({message : "Login successful", user: user});
    } catch (err){
      return res.status(400).json({
      message: "User / Password are incorrect",
    });
    }
}

module.exports = {login};