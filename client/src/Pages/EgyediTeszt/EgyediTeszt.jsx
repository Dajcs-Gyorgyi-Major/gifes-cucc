import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EgyediTeszt.css';

const EgyediTeszt = () => {
    const adat = localStorage.getItem('egyediTeszt');
    const teszt = JSON.parse(adat);
    const navigate = useNavigate();
    // console.log(teszt);

    const kivalaszt = (id) => {
        let ugyfel = document.getElementsByClassName(`${id}`);
        let name = ugyfel[0].value;
        let phone = ugyfel[1].value;
        let email = ugyfel[2].value;
        let datum = ugyfel[3].value;
        // let stDatum = datum.toString();
        console.log(teszt._id, id, name, phone, email, datum);
        const feltolt = async () => {
            try {
                const kuld = {
                    name,
                    phone,
                    email,
                    datum,
                    examinationId: teszt._id,
                    doctorId: id,
                };

                const response = await fetch(
                    'http://localhost:3500/chosentest',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(kuld),
                    }
                );

                if (response.ok) {
                    const res = await response.json();
                    console.log(res);
                    localStorage.setItem('datum', datum);
                    localStorage.setItem('name', name);
                    localStorage.setItem('phone', phone);
                    localStorage.setItem('email', email);
                    localStorage.setItem('vizsgalat', res.examination.title);
                    localStorage.setItem('doktor', res.doctor.name);
                    localStorage.setItem('doktorkep', res.doctor.image);
                    navigate('/osszefoglalo');
                } else {
                    const res = await response.json();
                    console.log(res.msg);
                }
            } catch (error) {
                console.log('Valami nem jó!');
            }
        };

        feltolt();
    };
    return (
        <div>
            <div className='egyediteszt'>
            <div className="container">
                
                <div className="kep0" />
                <div className='leiras'>
                <h1>{teszt.title}</h1>
                <p>{teszt.description}</p>
                <h3>Laborvizsgálat ára: {teszt.price} Ft</h3>
            </div>
            <div className='vegez'>
                <p>Tesztet végző kollégák:</p>
                <ul>
                    {teszt.doctor.map((elem) => (
                        <li className="like" key={elem._id}>
                            <img
                                className="imgkosar"
                                src={elem.image}
                                alt="kép"
                            />
                            <p className="ppp">{elem.name}</p>
                            <p>{elem.skill}</p>
                            <form>
                                <label htmlFor="name">Név: </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className={elem._id}
                                />
                                <label htmlFor="phone">Telefonszám: </label>
                                <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    className={elem._id}
                                />
                                <label htmlFor="email">E-mail: </label>
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    className={elem._id}
                                />
                                <label htmlFor="datum">Időpont: </label>
                                <input
                                    id="datum"
                                    type="datetime-local"
                                    name="datum"
                                    className={elem._id}
                                />
                            </form>
                            <button
                                className="kival"
                                onClick={() => kivalaszt(elem._id)}
                            >
                                Kiválaszt
                            </button>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EgyediTeszt;
