const {Schema , model} = require('../db/connection');
const fileSchema = new Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    filename : {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: 'plaintext'
    },
});
const File = model('File', fileSchema);

module.exports = File;