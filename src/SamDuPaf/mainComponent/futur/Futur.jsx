import React , {useState}from 'react';
import { Link } from 'react-router-dom';

import './futur.css'
import evilsam from './assets/evil sam.png';
import journasam from './assets/journal sam.png'
import useSound from 'use-sound';
import evillaught from './assets/evilrire.mp3'



const Futur = () =>{
    const [isHovered, setIsHovered] = useState(null);

    const [playEvilLaught, {stop: stopEvilLaught}] = useSound(evillaught, { volume: 0.5 });
    const [activesound, setActiveSound]=useState(false)
    
    const playSound =()=>{
        if(activesound){
            playEvilLaught()
        }

    }
    
    return(
        <div className='back'> 
       
        <div className='Contenufutur'>  
        <div className='sonevil'>
            <h3 className='question'>Activer le son</h3>
            <button onClick={()=>setActiveSound(true)}>oui</button>
            <button onClick={()=>setActiveSound(false)}>non</button>
    </div>

            <div className="retraite">
                <p>Malheureusement Samuel arrive bientôt à l'âge de la retraite....</p>
                <p>Sa présence sur le petit écran n'est pas éternelle...</p>
                <p>Il n'a pas de CDI pour question pour un champion...</p>
                <p>Un jour ou l'autre nous ne le verront plus le petit écran...</p>
                <p>Mais qui sait, un jour il pourrait être Président</p>
            </div>

            <div className='darksam'
            onMouseEnter={()=>{setIsHovered('darksam'); playSound()}}
            onMouseLeave={()=>{setIsHovered(null); stopEvilLaught()}}>
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