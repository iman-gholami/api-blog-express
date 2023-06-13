const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "First Name is required"],
        },
        lastname: {
            type: String,
            required: [true, "Last Name is required"],
        },
        profilePhoto: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },


    });


const User = mongoose.model('User',userSchema);

module.exports = User;