const express = require('express');
const Examination = require('../models/Examination');
const Doctor = require('../models/Doctor');
const ChosenTest = require('../models/ChosenTest');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const chosenTest = await ChosenTest.find()
            .populate('doctor')
            .populate('examination');
        const doctors = await Doctor.find();
        const examinations = await Examination.find();
        // console.log(chosenTest);
        res.status(200).render('chosentest', {
            chosenTest,
            doctors,
            examinations,
        });
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem sikerült!' });
    }
});

router.get('/leker', async (req, res) => {
    try {
        const chosenTest = await ChosenTest.find()
            .populate('doctor')
            .populate('examination');
        const doctors = await Doctor.find();
        const examinations = await Examination.find();
        res.status(200).json({ chosenTest });
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem sikerült!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, phone, email, datum, examinationId, doctorId } = req.body;
        // console.log({ name, phone, email, datum, examinationId, doctorId });
        const examination = await Examination.findOne({ _id: examinationId });
        const doctor = await Doctor.findOne({ _id: doctorId });
        const newChosenTest = new ChosenTest({
            client: { name, phone, email },
            datum,
            examination: examination,
            doctor: doctor,
        });
        await newChosenTest.save();
        res.status(201).json(newChosenTest);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' + error.message });
    }
});

router.post('/torol', async (req, res) => {
    try {
        const { id } = req.body;
        const ugyi = await ChosenTest.findOneAndDelete({ _id: id });
        res.status(200).json(ugyi);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

module.exports = router;
