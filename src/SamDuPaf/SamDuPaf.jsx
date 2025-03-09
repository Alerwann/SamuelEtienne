import './SamDuPaf.css'
import Header from './Header/Header'
import Passe from './mainComponent/passé/passe'
import React from 'react'
import Present from './mainComponent/présent/Present'
import Futur from './mainComponent/futur/Futur'
import { useNavigate, useSearchParams } from 'react-router-dom'



const SamDuPaf =()=>{
   const [searchParams]=useSearchParams();
   const component =searchParams.get('component')
   const navigate =useNavigate()

   let SelectComponent = null

   switch(component){
    case 'passe': SelectComponent=Passe;
    break;
    case 'present': SelectComponent=Present;
    break;
    case 'futur': SelectComponent=Futur;
    break;
    default: SelectComponent=()=><div>Component non troouvé</div>
   }
   return(
    <div>
        <Header/>
        <SelectComponent/>
    
       

    </div>
 
   )
}

export default SamDuPaf