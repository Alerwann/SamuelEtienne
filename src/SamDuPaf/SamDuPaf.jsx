import './SamDuPaf.css'
import Header from './HeaderFooter/Header'
import Footer from './HeaderFooter/Footer'
import Passe from './passé/passe'
import React, { useState } from 'react'
import Present from './présent/Present'
import Futur from './futur/Futur'
import Accueil from './Accueil/accueil'



const SamDuPaf =()=>{
    const [activeContent, setActiveContent]=useState('accueil')

    const handleNavClick=(content)=>{
        setActiveContent(content)
    }
    return(

        
        <div className='contenair'>

        <Header onNavClick={handleNavClick} />
        {activeContent==='accueil' && <Accueil/>}
        {activeContent==='passe' && <Passe/>}
        {activeContent==='present' && <Present/>}
        {activeContent==='futur' && <Futur/>}
        <Footer/>
       
        
        
        
        </div >



    )
}

export default SamDuPaf