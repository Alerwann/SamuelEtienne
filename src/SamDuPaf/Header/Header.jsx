import React from 'react';
import { useNavigate } from 'react-router-dom';
import  './Header.css'
           

const Header = ()=>{
    const navigate = useNavigate();
    const handleClick= (component)=>{
        navigate(`/paf?component=${component}`)
    }

    return(
       <div className='Header'>
        
         <div className="boutonretour">
        <button onClick={()=>navigate('/')}>Retour au 1er choix</button>
        </div>

        <h1 className='titleHeader'>Samuel Étienne - L'homme sérieux</h1>
        
            
            <button className='buttonHeader' onClick={()=>handleClick('passe')}>Passé</button>
            <button className='buttonHeader' onClick={()=>handleClick('present')}>Présent</button>
            <button className='buttonHeader' onClick={()=>handleClick('futur')}>Futur</button>
            


            
            
       
       </div>
    )
}

export default Header


