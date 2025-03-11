import Header from "../Header/Header"
import { useSearchParams } from 'react-router-dom'
import Emission from '../Contentmain/Emission/Emission'
import netEvent from '../Contentmain/Event/netEvent'
import Jeux from '../Contentmain/Jeux/Jeux'
import Reseaux from '../Contentmain/Reseaux/Reseaux'
import AccueilvNet from '../Contentmain/accueil/accueil'
import { IndiceProvider} from "../IndiceContext"



const Orgasampr = ()=>{

    const [searchParams]=useSearchParams();
    const component =searchParams.get('component')
    

    let SelectComponent = null
    let Indiceac =null

   switch(component){
    case 'Emission': SelectComponent= Emission ; Indiceac=100;
    break;
    case 'netEvent': SelectComponent= netEvent;Indiceac=100;
    break;
    case 'Jeux': SelectComponent=Jeux;Indiceac=100;
    break;
    case 'Reseaux': SelectComponent=Reseaux;Indiceac=100;
    break;
    default: SelectComponent=AccueilvNet;Indiceac=0
   }




    return(
        <div>
            <IndiceProvider>
            <Header indice={Indiceac}/>
            <SelectComponent/>

            </IndiceProvider>
         
        </div>
    )
}

export default Orgasampr