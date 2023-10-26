const { Schema, model } = require("mongoose")

const advertisementSchema = new Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String, default: "new"},
    date: {type: Date, default: Date.now},
});

module.exports = model('advertisement', advertisementSchema);