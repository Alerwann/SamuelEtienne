import './footer.css'
import tiktok from './assets/logotiktok.png'
import twitter from './assets/logox.png'
import ytb from './assets/logoytb.png'
import twitch from './assets/logotwitch.png'


const Footer = ()=>{
    return(

        <div className='footer'>
            <a href="twitter.com/SamuelEtienne" target='blank'><img src={twitter} alt="twitter" className='logo'/></a>
            <a href="twitch.tv/samueletienne" target='blank'><img src={twitch} alt="twitch" className='logo'/></a>
            <a href="https://www.youtube.com/channel/UCk2xd7NXB2BL5diWVNQj4Tg" target='blank'><img src={ytb} alt="ytb" className='logo'/></a>
            <a href="https://www.tiktok.com/@samueletienneofficiel" target='blank'><img src={tiktok} alt="tiktok" className='logo'/></a>
            
            </div>
       

    )
}

export default Footer