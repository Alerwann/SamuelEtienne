
import  './Header.css'
           

const Header = ({onNavClick})=>{
    return(
       <div className='Header'>
        <h1 className='titleHeader'>Samuel Étienne</h1>
        
            <button className='buttonHeader' onClick={()=>onNavClick('passe')}>Passé</button>
            <button className='buttonHeader' onClick={()=>onNavClick('present')}>Présent</button>
            <button className='buttonHeader' onClick={()=>onNavClick('futur')}>Future</button>
       
       </div>
    )
}

export default Header


