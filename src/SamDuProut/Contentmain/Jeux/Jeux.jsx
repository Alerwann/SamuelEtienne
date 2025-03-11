import { listeJeux } from "./ListeJeux"



const Jeux =()=>{
    return(
        <div>
            {listeJeux.map((jeu,index)=>(
             
                        <div className="jeux" key={index}>
                            <p>Nom: {jeu.nom}</p>
                            <p>Date de première game : {jeu.date}</p>
                        </div>
                
            ))
            }
        </div>
    )
}
export default Jeux