import React from 'react';
import { useNavigate } from 'react-router-dom';
import  './Header.css'
           

const Header = ({onNavClick})=>{
    const navigate = useNavigate();
    return(
       <div className='Header'>
        <h1 className='titleHeader'>Samuel Étienne- L'homme sérieux</h1>
        
            <button className='buttonHeader' onClick={()=>navigate('/')} >Accueil </button>
           
            <button className='buttonHeader' onClick={()=>onNavClick('passe')}>Passé</button>
            <button className='buttonHeader' onClick={()=>onNavClick('present')}>Présent</button>
            <button className='buttonHeader' onClick={()=>onNavClick('futur')}>Futur</button>
            
            
       
       </div>
    )
}

export default Header


