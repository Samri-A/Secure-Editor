const { languages } = require('monaco-editor');
const mongoose = require('mongoose');
const fileSchema = new mongoose.Schema({
    filename : {
        type: String,
        trim: true
    },
    content: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        enum: Object.keys(languages),
        default: 'plaintext'
    },
});
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
    },
    files: [fileSchema],
})
const User = mongoose.model('User', userSchema);

module.exports = User;