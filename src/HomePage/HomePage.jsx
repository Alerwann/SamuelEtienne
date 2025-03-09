import React, {useState} from 'react';
import './HomePage.css'
import {  useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

import badsam from './assets/badsam.png'; 
import goodsam from './assets/goodsam.png'
import inter from './assets/inter.png'

import paradis from './assets/paradisnuage.jpg'
import enfer from './assets/enfer.jpg'
import basique from './assets/choix.png'



import evil from './assets/evil.mp3'
import angel from './assets/Angels Singing.mp3'






const HomePage =()=>{


    const [isHovered, setIsHovered] = useState(null);
    const [activesound, setActiveSound]=useState(false)
    const navigate = useNavigate();


    const [playOrage, {stop: stopOrage}] = useSound(evil, { volume: 0.5 });
    const [playOiseau, {stop:stopOiseau}] = useSound(angel, { volume: 0.5 });
    const [backgroundimage, setBackGround]= useState(basique)

    const handleChoice = (choice)=>{
        setIsHovered(choice)
        if (choice==='samse'){
            setBackGround(paradis)
            if(activesound===true){
                playOiseau()}
             }
             else{
                setBackGround(enfer)
                if(activesound===true)
                playOrage()
            }
         
       
        }
    



return(
    
    <div className='all'  style={{backgroundImage :`url(${backgroundimage})` }}>

    <div className='son'>
        <h3 className='question'>Activer le son</h3>
        <button onClick={()=>setActiveSound(true)}>oui</button>
        <button onClick={()=>setActiveSound(false)}>non</button>
    </div>

    <h2 className='Homequestion'>Quel version de Samuel veux tu apprendre à connaitre?</h2>
   
    
    <div className='Button'>

    <div className="goodsam"
        onMouseEnter={()=>handleChoice('samse')}
        onMouseLeave={()=>{setIsHovered(null); stopOiseau(); setBackGround(basique)}}>
        
        <button className='buttonHome' onClick={()=>{navigate('paf/accueil'); stopOiseau()}}
        >Sam du paf</button>
        
    </div>
    
    <div className="badsam"  
        onMouseEnter={()=>handleChoice('badsam')}
         onMouseLeave={()=>{setIsHovered(null); stopOrage(); setBackGround(basique)}}> 
         <button className='buttonHome' onClick={()=> {navigate('/prout');stopOrage() }}
        >Sam du prout</button>
    </div>

    <div className='Photo'>
        <img src=
        {
            isHovered==='samse'? goodsam:
            isHovered==='badsam'? badsam:inter
        }
         alt="" />
    
    
    </div> 
</div>
</div>
)
}

export default HomePage