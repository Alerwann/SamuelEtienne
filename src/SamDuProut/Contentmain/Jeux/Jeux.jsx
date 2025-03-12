import { useState } from "react";
import { listeJeux } from "./ListeJeux"



const Jeux =()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = listeJeux.filter((item) =>
        item.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
 
    return(
        
        <div>
            <div>
                <label id="Choice">Les jeux auxquel il rejoue</label>
                <input type="checkbox" name="choice" id="Choice"/>
                <label i="gameName">Quel jeu cherches-tu?</label>
                <input type="text" name="gameName" id="gameName"  onchange={(e)=>setSearchTerm(e.target.value)}/>
            </div>


            {filteredData.map((jeu,index)=>(
             
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