import { useEffect, useState } from 'react';
import './Doctor.css'

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const leker = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/doctor/leker'
                );

                if (response.ok) {
                    const adat = await response.json();
                    console.log(adat);
                    setDoctors(adat);
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
    return (
        <div>
            <div className='container'>
            <div className='doctor-kep0'/>
            <h2>Kollégáink</h2>
            <div className='docs'>
                {doctors.map((doctor) => (
                    <div key={doctor._id} className='docs-item'>
                        <img src={doctor.image} alt="doki" />
                        <p><b>Név:</b> {doctor.name}</p>
                        <p><b>Végzettség:</b> {doctor.skill}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Doctor;
