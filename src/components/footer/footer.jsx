
import f from './footer.module.scss'
import {Link} from 'react-router-dom'

import Logo from '../../images/icon/Logo.png'
import Telegram from '../../images/footer/icons8-телеграм-48.png'
import Instagram from '../../images/footer/icons8-instagram-48.png'
import Facebook from '../../images/footer/icons8-facebook-новый-48.png'

export default function Footer () {
    return (
        
        <>
        
        <footer className={f.section__footer} >
            
            <div className="container">
                
                <div className={f.footer}>
                    
                    <img src={Logo} className={f.footer__logo} alt="logo" />

                    <div className={f.footer__icons}>
                        
                        <Link to='https://t.me/anvar_obbo' className={f.footer__icons__link}>
                            <img src={Telegram} alt="" />
                        </Link>

                        <Link to='https://www.instagram.com/anvarjon_khalikov/' className={f.footer__icons__link}>
                            <img src={Instagram} alt="" />
                        </Link>

                        <Link className={f.footer__icons__link} to='http://facebook.com/people/%D0%90%D0%BD%D0%B2%D0%B0%D1%80-%D0%A5%D0%B0%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2/pfbid022KLijuSZPwJKPLqHQwBbxB77vuky4SKMQSBEf11csfGdc1kHhx9dRemRY7h5mKSWl/'>
                            <img src={Facebook} alt="" />
                        </Link>

                    </div>

                    <p className={f.footer__text}>
                    © 2025 Все права защищены
                    </p>

                </div>

            </div>

        </footer>

        </>


    )
}