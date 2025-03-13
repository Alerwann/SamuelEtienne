import { useState } from "react";
import { listeJeux } from "./ListeJeux"
import './Jeux.css'



const Jeux =()=>{
    const[searchTerm, setSearchTerm] = useState('');
    const[showOnlyRejouer, setShowOnlyrejouer] = useState(false)
    const[alphabTri, setAlphaTri]=useState(false)
    const[dateTri, setDateTri]=useState(false)

    const convertirDate = (dateStr) => {
        const [jour, mois, annee] = dateStr.split('/');
        return new Date(`${annee}-${mois}-${jour}`);
      };
   
      const dateData = dateTri?listeJeux.sort((a,b)=>{
        const dateA =convertirDate(a.date);
        const dateB =convertirDate(b.date)
            return dateA - dateB
        
    }):listeJeux.sort((a, b)=>{
        const dateA =convertirDate(a.date);
        const dateB =convertirDate(b.date)
            return dateB - dateA
    })
    
   const filteredData  = dateData.filter(jeu => {
        const matchesSearch = jeu.nom.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRejouer = showOnlyRejouer ? jeu.Rejouer === true : true;
        
        return  matchesSearch && matchesRejouer ;
        });

    const sortedData = alphabTri? [...filteredData].sort((a,b)=>a.nom.localeCompare(b.nom)): filteredData

 

    return(
        
        <div className="contenairlJeux"> 
            <div className="titleljeux">
                <h2>La liste des Jeux auxquels Samuel a joué</h2>
                <p>(Il peut avoir des raté)</p>
            </div>


            <div className="filterchoice">

                    <label htmlFor="gameName">Quel jeu cherches-tu?</label>
                    <input type="text" name="gameName" id="gameName"  onChange={(e)=>setSearchTerm(e.target.value)}/>

                    <label htmlFor="ancienGame">Trier du plus ancien au plus récent</label>
                    <input type="checkbox" name="anvienGame" id="ancienGame" checked={dateTri} disabled={alphabTri} onChange={(e)=>setDateTri(e.target.checked)}/>
            
                    <label htmlFor="Choice">Les jeux auxquel il a rejoué</label>
                    <input type="checkbox" name="Choice" id="Choice" checked={showOnlyRejouer} onChange={(e)=>setShowOnlyrejouer(e.target.checked)} />
                    
                    <label htmlFor="alphabet">Tier par ordre alphabétique  </label>
                    <input type="checkbox" name="alphabet" id="alphabet" checked={alphabTri} disabled={dateTri} onChange={(e)=>setAlphaTri(e.target.checked)}/>

            </div>

            <div className="Listejeux">
            {sortedData.length > 0 ? (
                sortedData.map((jeu) => (
                    <div className="jeux"   style={{backgroundColor:jeu.Rejouer===true?'#72f652':'#f5957b'}}>
                        <p className="nomJeux">{jeu.nom}</p>
                        <p className="dateJeux">Date de première game : {jeu.date}</p>
                        
                    </div>
                ))
            ) : (
                <p>Aucun jeu trouvé.  Essayez de modifier vos filtres.</p>
            )}
            </div>
           
        </div>
    )
}
export default Jeux