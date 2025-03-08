import './SamDuPaf.css'
import Header from './HeaderFooter/Header'
import Footer from './HeaderFooter/Footer'
import Passe from './passé/passe'
import React, { useState } from 'react'
import Present from './présent/Present'
import Futur from './futur/Futur'



const SamDuPaf =()=>{
    const [activeContent, setActiveContent]=useState('present')

    const handleNavClick=(content)=>{
        setActiveContent(content)
    }
    return(

        
        <div className='contenair'>

        <Header onNavClick={handleNavClick} />
        {activeContent==='passe' && <Passe/>}
        {activeContent==='present' && <Present/>}
        {activeContent==='futur' && <Futur/>}
        <Footer/>
       
        
        
        
        </div >



    )
}

export default SamDuPaf