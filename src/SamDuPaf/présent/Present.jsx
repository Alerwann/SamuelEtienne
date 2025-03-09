import './present.css'
import sampresent from '../assetspaf/sampresent.png'

const Present = () =>{
    return(
        <div className="present">
        <div className='Contenupresent'>
            <img className='samactuel' src={sampresent} alt="samactuel" />
            <div className='tableinfopres'>
                 <h2>Emploi</h2> 
                 <p>Présentateur de Question pour un champion</p>
                 <p>Émission est présente tous les soirs à 18h10</p>
                 <a href="https://eu.castitreach.com/a/fmfr2/qpuc/welcome" target='blank'>Inscris toi à question pour un champion et rencontre Samuel</a>
                 <p>L'émission n'est pas en publique</p>
                 <p>Présente une revue de presse dès que possible le matin sur sa chaine Twitch</p>
                 <p>Il peut être appelé pour présenter différents événements sur le petit écran ou sur Twitch</p>
                 <h2>Vie privée</h2>
                 <p>Samuel vit un véritable compte de fée :</p>
                 <p className='samhe'>"Samuel vit heureux et a beaucoup d'enfants"</p>

                 
                </div>
        </div>
        
    </div>
    )
}

export default Present