const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{type: String, required: true, minLength: 4},
    lastName:{type: String, required: true, minLength: 4},
    email: {type: String, unique: true, match:/^\w+\@\w+\.\w+/},
    password: {type: String, required: true, minLength: 4},
    token: { type: String },
})

const UserModel = mongoose.model("user", userSchema)


module.exports = UserModel 