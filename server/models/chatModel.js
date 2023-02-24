const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    latestMessage: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        },
    groupadmin:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }    
    
},
{
    timestamps: true,
}
);

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;