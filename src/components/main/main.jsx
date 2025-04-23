import '../Style/app.scss'
import m from './main.module.scss'
import ScrollLink from '../../ScrollLink'
import about from '../../images/main/foto.png'

export default function Main () {
    return (
       
        <section className={m.section__main} id='home'>
            
            <div className="container">

                <div className={m.main}>
                    
                    <div className={m.main__item}>
                        
                        <p className={m.main__item__title}>
                        Анвар Халиков
                        </p>

                        <p className={m.main__item__subtitle}>
                        Предприниматель — бизнес практик
                        </p>

                        <p className={m.main__item__text}>
                        Эксперт по систематизации бизнес-проектов
                        </p>


                        <ScrollLink to="footer"  className={m.main__item__btn}>
                        Связаться
                        </ScrollLink>

                    </div>

                    <div className={m.main__images}>
                        
                        <img src={about} className={m.main__images__img} alt="" />

                    </div>

                </div>

            </div>

        </section>

    )
}