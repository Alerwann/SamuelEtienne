import './Header.css'

const Header =()=>{
    return(
        <div className='headersampr'>
            <h1>Samuel Etienne - Version du net</h1>
            <nav className="samduproutnav">
                <ul>
                    <li><button>Emission</button></li>
                    <li><button>Event</button> </li>
                    <li><button>Jeux</button></li>
                    <li><button>Réseaux</button></li>
                    <li><button>Retour choix</button></li>
                </ul>


            </nav>
        </div>
    )
}

export default Header