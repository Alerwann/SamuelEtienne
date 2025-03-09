import './passe.css'
import samjeune from'./samjeune.jpeg'

const Passe = () =>{
    return(

        <div className="back">
            <div className='ContenuPasse'>
                <img className='samejeune' src={samjeune} alt="samuel etienne jeune" />
                <div className='tableinfo'>
                  <h2>Date de naissance</h2>
                  <p>20/05/1971, Samuel Étienne est d'un autre siècle mais intérieurement reste actuel</p>
                  <h2>Lieu de naissance</h2>
                  <p>Rennes, ce village Breton a forgé un bon caratère à Samuel</p>
                  <h2>Études supérieur</h2>
                  <p>Bac C : </p>
                    <p>Traduction pour les 2000 et plus : Options principalement Math Physique SVT</p>
                    <p>Traduction pour les 80-2000 : BacS</p>        
                    <br />           
                  <p>Il s'est cherché un peu en testant 2 universités....</p>
                  <p>Il a fini en 1994  en École supérieur de journalisme de Paris</p>
                  <h2>Emplois</h2>
                  <p>Beaucoup de radio différentes</p>
                  <p>Il arrive à la tv sur Disney Channel en 1999</p>
                  <p>1999 - 2008 il sera dans le groupe Canal+</p>
                  <p>2008 Arrivée sur France télévision</p>
                  <p>Depuis 2016 Samuel présente Questions pour un champion</p>
                 
                </div>
            </div>
            
        </div>
       
    )
}

export default Passe