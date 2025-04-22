
import a from './about.module.scss'
import m from '../main/main.module.scss'
import '../Style/app.scss'

import Img from '../../images/main/aboutUs.png'

export default function About () {
    return (
        
        <>
        
        <section className={a.section__about} id='about'>
            
            <div className="container">

                <div className={a.about}>


                <div className={a.about__img}>
                    <img src={Img} className={a.about__img__one} alt="" />
                </div>

                <div className={a.about__item}>

                     <p className={a.about__item__title}>
                     Обо Мне
                     </p>

                        <div className={a.main__item__border}>
                            <p className={a.main__item__border__title}>
                            Создаю эффективные стратегии для развития вашего бизнеса
                            </p>
                        </div>

                        <div className={a.main__item__border}>
                            <p className={a.main__item__border__subtitle}>
                            С 2014 года – успешный предприниматель, стартап-менеджер и бизнес-практик. Участник многих международных конференций и семинаров в Турции, Германии, США, Китай, ОАЭ, России, Казахстане, Узбекистане, Кыргызстане и Таджикистане.
                            </p>
                        </div>

                        <div className={a.main__item__static}>

                            <div className={a.main__item__static__block}>
                            10+
                            <span>Лет опыта</span>
                            </div>
                            
                            <div className={a.main__item__static__block}>
                            20+
                            <span>Проекты</span>
                            </div>

                            <div className={a.main__item__static__block}>
                            52+
                            <span>Награды</span>
                            </div>

                            <div className={a.main__item__static__block}>
                            100+
                            <span>Ученики</span>
                            </div>
                            
                        </div>

                </div>



                </div>
                

            </div>

        </section>
        
        </>

    )
} 