const mongoose = require('mongoose');
const Doctor = require('./Doctor');
const Examination = require('./Examination');

const chosentestSchema = mongoose.Schema(
    {
        client: {
            name: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
        },
        datum: {
            type: String,
        },
        examination: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'examination',
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctor',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('chosentest', chosentestSchema);
