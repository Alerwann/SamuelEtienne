
import './Reseaux.css'
import { liens } from './listeReseaux'

const Reseaux =()=>{
    return(
        <div className='liensR'>
            
            
            {liens.map((lien, index) => (
              
                    <div className="liensolo" style={{backgroundColor:lien.color}} key={index}>
                    <a href={lien.url} target='_blank' rel='noopener noreferrer'>
                        <img src={lien.image} alt={lien.alt} className='logo' />
                    </a>
                    <p>{lien.description}</p>
                    </div>
                   
              
            ))}
    


        </div>
    )
}
export default Reseaux