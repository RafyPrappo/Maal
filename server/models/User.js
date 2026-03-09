const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name hahahahaha'],
        trim : true,
        maxlength: [50, 'Name cannot be more than 50 characters']

    },

    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']


    },

    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false // Exclude password from query results by default
    },

    createAt: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('User', userSchema);