import React from 'react'
import "./Vizsgalat.css";

const Vizsgalat = () => {
  return (
    <div>
      <div className='container'>
        <div className='kep2'/>
        <div className='valami'><h2>Éhgyomri vérvétel</h2></div>
        <div className='szoveg'>
          <p>A vérvizsgálatok többségéhez általában 12 órás éhezés utáni, éhgyomri minta szükséges, emiatt a vérvételt a reggeli órákban javasoljuk. Táplálékfelvétel egyes laboratóriumi vizsgálatok eredményét jelentősen befolyásolja – pl.: vércukor, terheléses vércukor, vérzsírok (koleszterin, triglicerid), májenzimek stb. Éhgyomri vérvétel előtt vizet fogyaszthat (javasolt is), alkoholt, üdítőt, kávét, ételt nem. Javasolt legkésőbbi időpont 11 óra, ezen túl már éhezési paraméterekről beszélünk, melyek eltérhetnek.</p>
          <ul>
            <li>ha Önnek éhgyomri vérvétele lesz, nagyon fontos, hogy mindenre kellő figyelmet fordítson, mert nem csak az étkezés, de számos egyéb tényező is nagy mértékben befolyásolhatja a kapott eredményeket!</li>
            <li>bő folyadékpótlás 2-3 dl javasolt víz formájában!</li>
            <li>szokásos napi gyógyszereit minden esetben előírás szerint vegye be! (inzulin, cukorbetegségre, vagy magas vérnyomásra szedett gyógyszerek) kérdezze meg kezelőorvosát a laborvizsgálat előtt, hogy az egyéb szedett gyógyszerek mennyire befolyásolják az Ön eredményét!</li>
          </ul>
        </div>
        <div className='valami2'> <h2>Nem éhgyomri vérvétel / Könnyed étkezés </h2></div>
        <div className='szoveg2'>
          <ul>
            <li>Amennyiben az Ön vizsgálatához nem szükséges éhgyomorra érkezni, javasoljuk, hogy inkább könnyebb reggelit fogyasszon. A laboratóriumi méréseket befolyásolhatják a szervezetben lévő szénhidrátok és zsírok mennyisége.</li>
            <li>A fizikai aktivitás is emeli bizonyos sejtek értékét a vérben, így tanácsos vérvétel előtt kerülni a jelentősebb megterhelést.</li>
            <li>Gyógyszerek és élvezeti szerek (pl. kávé) is befolyással lehet az eredményekre.</li>
            <li>A vérvétel előtt, - legyen szó bármilyen vizsgálatról, lehetőség szerint 2 órán belül ne érkezzen! </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Vizsgalat
