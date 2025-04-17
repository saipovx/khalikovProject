
import u from './uslugi.module.scss'
import '../Style/app.scss'

import icon1 from '../../images/icon/icons8-бизнес-96 (1).png'
import icon2 from '../../images/icon/icons8-маркетинг-50.png'
import icon3 from '../../images/icon/icons8-анализ-навыков-50.png'
import icon4 from '../../images/icon/icons8-анализ-64.png'

export default function Uslugi () {
    
    return (

        <>
        
        <section className={u.section__uslugi}>
            
            <div className="container">

                <p className={u.uslugi__title}>
                Чем я могу помочь ?
                </p>

                <div className={u.uslugi}>
                    
                    <div className={u.uslugi__item}>

                        <img src={icon1} className={u.uslugi__item__icon} alt="" />

                        <p className={u.uslugi__item__titleTwo}>
                        Бизнес планирование
                        </p>

                        <p className={u.uslugi__item__subtitleTwo}>
                            
                        Разработка стратегического процесса, включающего определение целей, разработку подробного плана действий, анализ ключевых показателей производительности (KPI) и финансовых результатов.

                        </p>

                    </div>

                    <div className={u.uslugi__item}>

                        <img src={icon2} className={u.uslugi__item__icon} alt="" />

                        <p className={u.uslugi__item__title}>
                        Маркетинг и продажи
                        </p>

                        <p className={u.uslugi__item__subtitle}>

                       Создание комплекса стратегий для привлечения клиентов, формирования уникального предложения и увеличения продаж через эффективные маркетинговые кампании и управление брендом.     
                       
                        </p>


                    </div>

                    <div className={u.uslugi__item}>

                        <img src={icon3} className={u.uslugi__item__icon} alt="" />

                        <p className={u.uslugi__item__title}>
                        Управление финансами
                        </p>

                        <p className={u.uslugi__item__subtitle}>
                            
                        Оптимизация учета, планирования и контроля финансовых ресурсов компании с помощью бюджетирования, управления оборотным капиталом и разработки стратегий финансирования.

                        </p>

                    </div>

                    <div className={u.uslugi__item}>

                    <img src={icon4} className={u.uslugi__item__icon} alt="" />
                    
                    <p className={u.uslugi__item__title}>
                    Маркетинговый анализ
                   </p>

                   <p className={u.uslugi__item__subtitle}>
                   Оценка рыночной среды, включая анализ конкурентов, трендов, потребительского спроса, ценовой стратегии, инноваций и дифференциации продукта, для разработки эффективных маркетинговых решений.
                    </p>

                    </div>

                </div>

                
            </div>

        </section>
        

        </>
        
    )

}