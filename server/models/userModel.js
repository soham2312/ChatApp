const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true ,unique: true },
    password: { type: String, required: true },
    pic: { type: String, required:true, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" },
    // isAdmin: { type: Boolean, default: false },
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
