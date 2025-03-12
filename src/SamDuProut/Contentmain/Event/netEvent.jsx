import './netEvent.css'
import { listeEvent } from './listeEvent'

const netEvent =()=>{

    const dateParticipation =(evenement)=>{
        let datePar ='null'
        if(evenement['Date de fin']===""){
            datePar= `le ${evenement['Date de début']}`

        }else{
            datePar=`du ${evenement['Date de début']} au ${evenement['Date de fin']} `
        }
        return(datePar)
    }


    return(
        <div className='globalevent'>
            <div className='titleEvent'> 
                <h2>Les évents auxquels Samuel a participé </h2>
                <h3>En plus de ces propres productions, Samuel participe à de nombreux événements, collaborations et événements caricatifs avec d'autres streamers.</h3>
            </div>
           
            <div className="listEvent">
            { listeEvent.map((evenement)=>(
            <div className='evenement'>
                <p className='eventName'>{evenement['Nom de l’event']} </p> 
                <p>Grâce à : </p>
               <p className='nameCrea'> {evenement.Créateur}</p>
                
                
                <p> {evenement.Description}</p>
                <p>	L'événement a eu lieu {dateParticipation(evenement)} </p>
            </div>
           ))}
            </div>
          
        </div>
    )
}
export default netEvent