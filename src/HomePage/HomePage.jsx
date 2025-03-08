import React, {useState} from 'react';
import './HomePage.css'
import badsam from '../assets/badsam.png'; 
import goodsam from '../assets/goodsam.png'
import inter from '../assets/inter.png'
import { useNavigate } from 'react-router-dom';


const HomePage =()=>{
    const [isHovered, setIsHovered] = useState(null);
    const navigate = useNavigate()

    const pafClick = ()=>{
        navigate('/paf')
    }

    const proutClick=()=>{
        navigate('/prout')
    }

return(
    <div className='all'>
    
    <h2>Quel version de Samuel veux tu apprendre à connaitre?</h2>
    <div className='Button'>

    <div className="goodsam"
        onMouseEnter={()=>setIsHovered('samse')}
        onMouseLeave={()=>setIsHovered(null)}>
        
        <button className='buttonHome' onClick={pafClick}
        >Sam du paf</button>
        
    </div>
    
    <div className="badsam" onMouseEnter={()=>setIsHovered('badsam')}
         onMouseLeave={()=>setIsHovered(null)}> 
         <button className='buttonHome' onClick={proutClick}
        >Sam du prout</button>
    </div>

    <div className='Photo'>
        <img src=
        {
            isHovered==='samse'? goodsam:
            isHovered==='badsam'? badsam:
            inter
        }
         alt="" />
    
    
   </div> 
</div>

   
  
 
</div>
    

 
    
 
   
   
)
}

export default HomePage