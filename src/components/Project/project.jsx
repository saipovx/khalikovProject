
import u from './project.module.scss'
import '../Style/app.scss'

import { Link } from 'react-router-dom';

import icon1 from '../../images/project/IMG_9715.JPG'
import icon2 from '../../images/project/IMG_9716.JPG'
import icon3 from '../../images/project/IMG_9717.JPG'
import icon4 from '../../images/project/IMG_9718.JPG'
import icon5 from '../../images/project/IMG_9719.JPG'
import icon6 from '../../images/project/IMG_9720.JPG'
import strelka from '../../images/icon/icons8-стрелка-50.png'

export default function Project () {
    
    return (

        <>
        
        <section className={u.section__uslugi}>
            
            <div className="container">

                <p className={u.uslugi__title}>
                Мои последние проекты
                </p>


                <div className={u.uslugi}>

                    <Link to='http://aslzar.uz/' target='_blink' className={u.uslugi__item}>

                        <img src={icon2} className={u.uslugi__item__icon} alt="" />

                        <img src={strelka} alt="svg" className={u.uslugi__item__st} />

                        <p className={u.uslugi__item__titleTwo}>
                        AslZar
                        </p>

                        <p className={u.uslugi__item__subtitleTwo}>

                        Сеть ювелирных домов и первый маркетплейс ювелирных украшений в Узбекистане
                       
                        </p>


                    </Link>                    
                    
                    <Link to='https://obbo.tj/' target='_blink' className={u.uslugi__item}>

                        <img src={icon1} className={u.uslugi__item__icon} alt="" />

                        <img src={strelka} alt="svg" className={u.uslugi__item__st} />

                        <p className={u.uslugi__item__title}>
                        OBBO Marketplace
                        </p>

                        <p className={u.uslugi__item__subtitle}>
                        Первый маркетплейс в Таджикистане
                        </p>

                    </Link>

                    <Link to='https://kreditmarket.tj/' target='_blink'  className={u.uslugi__item}>

                        <img src={icon3} className={u.uslugi__item__icon} alt="" />

                        <img src={strelka} alt="svg" className={u.uslugi__item__st} />

                        <p className={u.uslugi__item__title}>
                        Kredit Market
                        </p>

                        <p className={u.uslugi__item__subtitle}>
                            
                        Сеть магазинов электроники и бытовой техники

                        </p>

                    </Link>

                    <Link to='https://www.instagram.com/babolo_education/' target='_blink'  className={u.uslugi__item}>

                    <img src={icon4} className={u.uslugi__item__icon} alt="" />

                    <img src={strelka} alt="svg" className={u.uslugi__item__st} />

                    <p className={u.uslugi__item__title}>
                    Babolo Group
                   </p>

                   <p className={u.uslugi__item__subtitle}>
                   Группа компаний, работающая в следующих направлениях: Babolo Education, Babolo taxi, Babolo Shop
                    </p>

                    </Link>

                     <Link to='https://davlatov.world/?page_id=340' target='_blink'  className={u.uslugi__item}>

                    <img src={icon5} className={u.uslugi__item__icon} alt="" />

                    <img src={strelka} alt="svg" className={u.uslugi__item__st} />
                     
                    
                    <p className={u.uslugi__item__title}>
                    Международная холдинговая компания UDI International
                   </p>

                   <p className={u.uslugi__item__subtitle}>
                   Член совета директоров: UDI International, CEO UDI Tajikistan
                    </p>

                    </Link> 

                    <Link to='https://sanduk.tj/glavnaya/' target='_blink'  className={u.uslugi__item}>

                    <img src={icon6} className={u.uslugi__item__icon} alt="" />

                    <img src={strelka} alt="svg" className={u.uslugi__item__st} />
                     
                    
                    <p className={u.uslugi__item__title}>
                    Микрокредитная депозитная организация «Сандук»
                   </p>

                   <p className={u.uslugi__item__subtitle}>
                   Член совета директоров
                    </p>

                    </Link> 

                </div>

                
            </div>

        </section>
        

        </>
        
    )

}