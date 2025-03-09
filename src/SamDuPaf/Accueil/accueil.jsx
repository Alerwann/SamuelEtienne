import { useNavigate } from 'react-router-dom';
import './accueil.css'
import React from 'react';



const Accueil = ({onNavClick})=>{
 const navigate =useNavigate()

    const handleClick= (component)=>{
        navigate(`/paf?component=${component}`)

    }
return(
    <div className="accueilpaf">
            <h2>Tu peux apprendre sur le passé,le présent et le futur </h2>
            <h2>Choisis juste au dessus ce que tu veux voir</h2>
            <div className='choixbouton'>
            <button className='buttonHeader' onClick={()=>handleClick('passe')}>Passé</button>
            <button className='buttonHeader' onClick={()=>handleClick('present')}>Présent</button>
            <button className='buttonHeader' onClick={()=>handleClick('futur')}>Futur</button>
            </div>
            
    </div>
)
}
export default Accueil