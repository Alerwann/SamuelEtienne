import './Emission.css'
import { listeemission } from './listemission'

const Emission =()=>{

    const finemission =(emission)=>{
        let infofin 
        if(emission.Dernier===""){
            infofin= `L'émission est toujours d'actualitée et est diffusée le ${emission.Jourdif}` 
        }else{
            infofin=`Le dernier épisode était le ${emission.Dernier}`
        }
        return(infofin)
    }



    return( <div className='contenairEmission'>
        <div className='titleEmission'>
            <h2>Les superbes émissions de Samuel</h2>
            <h3>Samuel anime plusieurs émissions récurentes au cours de la semaine sur TWITCH</h3>
        </div>
        
        <div className='listEmission'>
        {
            listeemission.map((emission)=>(
                <div className='Emission'> 
                     <p className='emissionNom'>{emission.Nom}  </p>
                     <span className='descriptionTooltip'>{emission.Description}</span>
                     <p>La première diffusion a eu lieu le {emission.Premier}</p>
                     <p style={{color: emission.Dernier===""?'#bff57b':'#f5957b'}}>{finemission(emission)}</p>
                     
                </div>
               
            ))
        }

        </div>
       
    </div>)
   

}

export default Emission