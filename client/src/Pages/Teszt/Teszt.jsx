import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Teszt.css';
import Image from '../Teszt/4.png';

const Teszt = () => {
    const [test, setTest] = useState([]);

    useEffect(() => {
        const leker = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/examination/leker'
                );

                if (response.ok) {
                    const adat = await response.json();
                    console.log(adat);
                    setTest(adat);
                } else {
                    const adat = await response.json();
                    console.log(adat.msg);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        leker();
    }, []);

    const kivalaszt = (id) => {
        const egyediTeszt = test.filter((elem) => elem._id === id);
        console.log(egyediTeszt);
        // dispatch(feltolt({ egyediTeszt }));
        localStorage.setItem('egyediTeszt', JSON.stringify(egyediTeszt[0]));
    };

    return (
        <div>
            <div className="container">
                <div className="kep3" />
                <div className="kinek">
                    <h2>Kinek ajánlott?</h2>
                </div>
                <div className="felsorol">
                    <ul>
                        <li>
                            akiknek a családjában halmozottan fordul elő pl.
                            daganatos vagy szív és érrendszeri megbetegedés,
                            trombózis, cukorbetegség..stb.{' '}
                        </li>
                        <li>
                            akik családtervezés előtt állnak és szeretnék
                            kizárni az öröklődő betegségeket, esetleges
                            kromoszóma rendellenességeket.{' '}
                        </li>
                        <li>meddőség esetén pl. kariotipizálás</li>
                        <li>
                            panasz esetén pl. laktóz,- vagy gluténérzékenység{' '}
                        </li>
                        <li>
                            hosszantartó gyógyszerszedés vagy együttesen több
                            gyógyszert szedőknél a mellékhatás vizsgálatára
                        </li>
                        <li>
                            azoknak, akik hosszútávon szeretnék megőrizni
                            egészségi állapotukat
                        </li>
                    </ul>

                    <p>
                        A vizsgálatokat csak egyszer kell elvégeztetnünk az
                        életben, s hogy erre mikor kerül sor, már egyéni döntés.
                        Ha a családban ismert betegségek állnak fent, már kicsi
                        gyermekeknek is javasolt a megfelelő tesztet elvégezni,
                        hogy annak ismeretében valóban a megelőzésre
                        fókuszáljunk! Ne felejtsük el, hogy a legtöbb esetben
                        nem magát a betegséget, hanem az arra való hajlamot
                        mutatjuk ki! Tehát közel sem biztos, hogy a vizsgált
                        betegséget "meg is fogjuk kapni". Viszont a genetika
                        mellett az életmód, a környezeti hatások is nagy
                        befolyással bírnak, tehát egy infarktusra hajlamosító
                        génmutáció lehet végzetes is, ha nem figyelünk magunkra
                        kellőképp. Elősegítjük az életmóddal: dohányzás,
                        stressz, nem megfelelő élelmiszerek fogyasztása...stb.
                    </p>
                </div>
                <div className="gentest-h2">
                    <h2>Genetika, Génteszt</h2>
                </div>

                <div className="gentest">
                    {test.map((item) => (
                        <div key={item._id} className="gentest-item">
                            <img src={Image} alt={item.title} />
                            <div className="gentest-item-info">
                                <h3>{item.title}</h3>
                                <p>{item.price} Ft</p>
                                <div className='gomb'>
                                <Link
                                    to={{
                                        pathname: '/egyediteszt/' + item._id,
                                    }}
                                    onClick={() => kivalaszt(item._id)}
                                >
                                    Ajánlat Megtekintése
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teszt;
