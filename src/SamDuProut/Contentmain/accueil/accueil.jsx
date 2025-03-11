import { useContext,} from "react"
import { IndiceContext } from "../../IndiceContext"
import './accueil.css'
import { messages } from "./messages"



const Accueilvnet =()=>{
   
    const { Indice, setIndice } = useContext(IndiceContext)

    const indiceincre =()=>{
      setIndice(Indice+1)
    }

    

   return( 
    <div className="principalContenair">
        <div className="butonContenair">
            <button disabled={Indice>=messages.length-1} onClick={()=>indiceincre(Indice)}>Suivant</button>
            <button disabled={Indice===0} onClick={()=>setIndice(0)}>Reset</button>
        </div>
    
    <div className="messageList">
    {messages.map((message, index) => (
                    <h2
                        key={index}
                        style={{ display: Indice >= index ? 'block' : 'none', 
                            color: index === messages.length - 2 ? 'red' : 'black',
                            fontSize: index===messages.length-2? 30:25 }}
                    >
                        {message}
                    </h2>
                ))}
    </div>
       
        
    </div>)
}

export default Accueilvnet