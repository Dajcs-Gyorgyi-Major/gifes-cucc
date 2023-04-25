const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        skill: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('doctor', doctorSchema);
