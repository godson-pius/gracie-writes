const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true,
        unique: true,
    },
    password: { 
        type: String,
        required: true,
    },
    pic: { 
        type: String,
        default: "https://graciewrite.herokuapp.com/img/pic.jpeg"
    }
}, { timestamps: true })

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin