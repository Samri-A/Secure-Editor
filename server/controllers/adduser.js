const User = require('../models/User.model');
const server = require('../models/server');
const Server = new server();

export default adduser = async  (req, res) => {
const {name , email , password} = req.body;
try {
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).send({ message: 'User already exists' });
    }
    const newUser = new User({name, email, password});
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
} catch (err){
    res.status(400).json({message: 'Error creating user. Please try again.'});
}
}
