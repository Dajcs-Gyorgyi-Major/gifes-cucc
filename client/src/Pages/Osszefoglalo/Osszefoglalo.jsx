import { useState, useEffect } from 'react';
import './Osszefoglalo.css';

const Osszefoglalo = () => {
    const datum = localStorage.getItem('datum');
    const vizsgalat = localStorage.getItem('vizsgalat');
    const doktor = localStorage.getItem('doktor');
    const doktorkep = localStorage.getItem('doktorkep');
    const name = localStorage.getItem('name');
    const phone = localStorage.getItem('phone');
    const email = localStorage.getItem('email');

    const [exams, setExams] = useState([]);

    useEffect(() => {
        const leker = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/chosentest/leker'
                );

                if (response.ok) {
                    const adat = await response.json();
                    const valogat = adat.chosenTest.filter((elem) => {
                        return (
                            elem.client.name === name &&
                            elem.client.phone === phone &&
                            elem.client.email === email
                        );
                    });
                    console.log(valogat);
                    const data = [];
                    for (let i = 0; i < valogat.length - 1; i++) {
                        data.push(valogat[i]);
                    }
                    console.log(data);
                    setExams(data);
                } else {
                    const adat = await response.json();
                    console.log(adat.msg);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        leker();
    }, [email, name, phone]);

    return (
        <div>
            <div className='container-ossz'>
            <div className='ossz-kep0'/>
            <div className='osszefoglalo-h'>
            <div className='osszefoglalo'>
            <h1>Hello {name}!</h1>
            <p><b>Az ön által választott teszt:</b> {vizsgalat}</p>
            <p><b>Orvos:</b> {doktor}</p>
            <img src={doktorkep} alt="doki" />
            <p>{datum}</p>
            <p>
                Köszönjük a foglalását! Kollégánk hamarosan keresni fogja a
                részletekkel kapcsolatban!
            </p>
            </div>
            </div>
            <h2>Eddigi vizsgálatok</h2>
            {exams.length === 0 ? (
                <h1>Eddig még nem volt teszt!</h1>
            ) : (
                exams.map((elem) => (
                    <div key={elem._id}>
                        <h2>{elem.examination.title}</h2>
                        <h3>{elem.doctor.name}</h3>
                        <img src={elem.doctor.image} alt="doki" />
                        <p>{elem.datum}</p>
                    </div>
                ))
            )}
            </div>
        </div>
    );
};

export default Osszefoglalo;
