import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Vizsgalat from './Pages/Vizsgalat/Vizsgalat';
import Teszt from './Pages/Teszt/Teszt';
import Footer from './Components/Navbar/Footer';
import Doctor from './Pages/Doctors/Doctor';
import EgyediTeszt from './Pages/EgyediTeszt/EgyediTeszt';
import Osszefoglalo from './Pages/Osszefoglalo/Osszefoglalo';
import './App.css';

function App() {
    return (
        <div className="App">
        

        
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/vizsgalat" element={<Vizsgalat />} />
                    <Route path="/teszt" element={<Teszt />} />
                    <Route path="/egyediteszt/:id" element={<EgyediTeszt />} />
                    <Route path="/doctor" element={<Doctor />} />
                    <Route path="/osszefoglalo" element={<Osszefoglalo />} />
                    <Route path="/" element={<Home />} />
                </Routes>
               
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
