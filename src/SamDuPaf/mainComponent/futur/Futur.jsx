import React , {useState}from 'react';
import { Link } from 'react-router-dom';

import './futur.css'
import evilsam from './assets/evil sam.png';
import journasam from './assets/journal sam.png'



const Futur = () =>{
    const [isHovered, setIsHovered] = useState(null);
    
    
    
    return(
        <div className='back'> 
        <div className='Contenufutur'>  
            <div className="retraite"
             onMouseEnter={()=>setIsHovered('journasam')}
            onMouseLeave={()=>setIsHovered(null)}>
                <p>Malheureusement Samuel arrive bientôt à l'âge de la retraite....</p>
                <p>Sa présence sur le petit écran n'est pas éternelle...</p>
                <p>Il n'a pas de CDI pour question pour un champion...</p>
                <p>Un jour ou l'autre nous ne le verront plus le petit écran...</p>
            </div>
            <div className='darksam'
            onMouseEnter={()=>setIsHovered('darksam')}
            onMouseLeave={()=>setIsHovered(null)}>
                 <p>Heureusement il existe un autre Samuel :</p>
                  <Link to="/prout">DARKSAM</Link>  
            </div>
            <div className='samphoto'>
            <img  className='eviljournasam'
            src={isHovered==='darksam'? evilsam:journasam}
             alt="sam dif version" />
        </div>
        </div>
        

      
       
        
        </div>
       
       
    )
}

export default Futur