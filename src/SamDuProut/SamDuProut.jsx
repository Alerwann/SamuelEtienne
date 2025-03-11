import { useState } from 'react'
import './Samduprout.css'
import { useNavigate } from 'react-router-dom';



const SamDuProut =()=>{
    const [continueState, setContinueState]= useState(false)
     const navigate =useNavigate()



    return(
        <div className='accueilProut'>
            <div className='verifacces'  style={{ display: continueState===false?'':'none'}}>
            <h2 className='questionacces'>Es-tu sûr de vouloir rencontrer cette personne?</h2>
            <button className='accesproutbouton' onClick={()=>setContinueState(true)}>OUI</button>
            <button className='accesproutbouton' onClick={()=>{setContinueState(false); navigate('/')}}>
               NON
                 </button>
            </div>
        
            <div className='ultimverif'  style={{ display: continueState===true?'':'none'}}>
               
                <button className='voulu' onClick={()=>{navigate("/prout/accueil")}}>Tu l'auras voulu</button>
                <button className='annuler'  onClick={()=>{setContinueState(false)}}>ANNULER</button>

            </div>

        </div>
    )

}

export default SamDuProut