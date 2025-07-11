const File = require('../models/File');

const CreateFile = async (req , res)=>{
    const {email , filename ,content , language} = req.body;
    try{
        const file = new File({email , filename , content , language});
        await file.save();
        res.status(201).json({ message : 'Saved sucessfully'});

    }catch{
        res.status(400).json({message: 'Error saving a file. Please try again.'});
    }
}

module.exports = {CreateFile};