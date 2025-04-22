import c from './Contact.module.scss'
import '../../components/Style/app.scss'

export default function Contact () {
    return (
        
        <>
        
        <section className={c.section__contact} id='footer'>
            
            <div className='container'>

                <div className={c.contact}>

                <p className={c.contact__title}>
                Отправь мне сообщение
                </p>

                <p className={c.contact__subtitle}>
                Ваш электронный адрес не будет опубликован. Все поля обязательны. для заполнения
                </p>

                <div className={c.contact__center}>
                    
                    <input type="text" placeholder="Ваше имя"  className={c.contact__center__inp}/>

                    <input type="text" placeholder="Ваш электронный адрес "  className={c.contact__center__inp}/>

                </div>

                <textarea type="text" placeholder="Сообщение" className={c.contact__center__text} />

                <button className={c.contact__center__btn} >
                Отправить
                </button>


                </div>
                
            </div>

        </section>

        </>

    )
} 