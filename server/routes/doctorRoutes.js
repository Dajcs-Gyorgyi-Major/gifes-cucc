const express = require('express');
const Doctor = require('../models/Doctor');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const adatok = await Doctor.find();
        res.status(200).render('Doctor', { adatok });
    } catch (error) {
        res.status(500).json({ msg: 'Valami elromlott!' });
    }
});

router.get('/leker', async (req, res) => {
    try {
        const adatok = await Doctor.find();
        res.status(200).json(adatok);
    } catch (error) {
        res.status(500).json({ msg: 'Valami elromlott!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        const newDoctor = new Doctor(body);
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/torol', async (req, res) => {
    try {
        const { id } = req.body;
        const ugyi = await Doctor.findOneAndDelete({ _id: id });
        res.status(200).json(ugyi);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

module.exports = router;
