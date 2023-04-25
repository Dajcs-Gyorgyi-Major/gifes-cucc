const mongoose = require('mongoose');
const Doctor = require('./Doctor');

const examinationSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        doctor: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'doctor',
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('examination', examinationSchema);
