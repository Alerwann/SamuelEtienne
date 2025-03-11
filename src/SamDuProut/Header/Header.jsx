import { useEffect, useState, useContext } from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { messages } from '../Contentmain/accueil/messages';
import { IndiceContext } from '../IndiceContext';


const NavButton = ({ disabled, onClick, children }) => (
    <li>
        <button disabled={disabled} onClick={onClick}>
            {children}
        </button>
    </li>
);

const Header =(componentChoix)=>{

    // const [isdisable, setIsDisable]= useState(false)
    const navigate =useNavigate()
    const [isdisable, setIsDisable] = useState(true);
    const { Indice } = useContext(IndiceContext);
    useEffect(() => {
        // Mettre à jour isDisable en fonction de la valeur de Indice
        setIsDisable(Indice >= messages.length-1);
    }, [Indice]);

    
  // Fonction pour gérer la navigation
  const prhandleClick = (component) => {
    navigate(`/prout/accueil?component=${component}`);
};


const navItems = [
    { label: 'Emission', component: 'Emission' },
    { label: 'Event', component: 'netEvent' },
    { label: 'Jeux', component: 'Jeux' },
    { label: 'Réseaux', component: 'Reseaux' },
];



    return(
        <div className='headersampr'>
            <h1>Samuel Etienne - Version du net</h1>
            
            <nav className="samduproutnav">
                <ul>
                {navItems.map((item, index) => (
                        <NavButton
                            key={index}
                           disabled={componentChoix.indice!==100 && !isdisable }
                          
                            onClick={() => prhandleClick(item.component)}
                        >
                            {item.label}
                        </NavButton>
                    ))}
                    <li><button  onClick={()=>navigate('/')} >Retour choix</button></li>
                </ul>


            </nav>
        </div>
    )
}


export default Header