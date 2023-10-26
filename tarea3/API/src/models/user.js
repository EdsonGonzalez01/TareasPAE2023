const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    name: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: {type: String },
    location: { type: String, default: "new"},
    status: { type: String, default: "bronze"},
    roles: { type: Array, default: ["user"]},
});


module.exports = model('users', userSchema);