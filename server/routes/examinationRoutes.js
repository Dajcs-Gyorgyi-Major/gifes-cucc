const express = require('express');
const Examination = require('../models/Examination');
const Doctor = require('../models/Doctor');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const examinations = await Examination.find().populate('doctor');
        const doctors = await Doctor.find();
        res.status(200).render('examination', { examinations, doctors });
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem sikerült!' });
    }
});

router.get('/leker', async (req, res) => {
    try {
        const examinations = await Examination.find().populate('doctor');
        res.status(200).json(examinations);
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem sikerült!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, price, doctors } = req.body;
        console.log({ title, description, price, doctors });
        const tomb = [];
        for (let i = 0; i < doctors.length; i++) {
            const ugynok = await Doctor.findOne({ name: doctors[i] });
            tomb.push(ugynok);
        }
        console.log(tomb);
        const newExamination = new Examination({
            title,
            description,
            price,
            doctor: tomb,
        });
        await newExamination.save();
        res.status(201).json(newExamination);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/torol', async (req, res) => {
    try {
        const { id } = req.body;
        const porti = await Examination.findOneAndDelete({ _id: id });
        res.status(200).json(porti);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/modosit', async (req, res) => {
    const { id, title, description, price, doctors } = req.body;
    const tomb = [];
    for (let i = 0; i < doctors.length; i++) {
        const ugynok = await Doctor.findOne({ name: doctors[i] });
        tomb.push(ugynok);
    }
    const exim = await Examination.findOneAndUpdate(
        { _id: id },
        { title, description, price, doctor: tomb },
        { new: true }
    );
    res.status(200).json({ exim });
});

module.exports = router;
