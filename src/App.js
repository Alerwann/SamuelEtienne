import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './HomePage/HomePage';
import SamDuPaf from './SamDuPaf/SamDuPaf'
import SamDuProut from './SamDuProut/SamDuProut'
import Accueil from './SamDuPaf/Accueil/accueil';
import Orgasampr from './SamDuProut/orgasampr/orgasampr';



function App() {
  return (
   <Router basename='/SamuelEtienne/'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='paf/accueil' element={<Accueil/>}/>
      <Route path="paf" element={<SamDuPaf />} />
      <Route path="prout" element={<SamDuProut />} />
      <Route path="/prout/accueil" element={<Orgasampr/>} />

   

      </Routes>
        

    
   </Router>

  );
}

export default App;
