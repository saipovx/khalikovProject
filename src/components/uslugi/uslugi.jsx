import u from './uslugi.module.scss'
import '../Style/app.scss'

import icon1 from '../../images/icon/icons8-бизнес-96 (1).png'
import icon2 from '../../images/icon/icons8-маркетинг-50.png'
import icon3 from '../../images/icon/icons8-анализ-навыков-50.png'
import icon4 from '../../images/icon/icons8-анализ-64.png'

const uslugiData = [
  {
    icon: icon1,
    title: 'Бизнес планирование',
    subtitle: 'Разработка стратегического процесса, включающего определение целей, разработку подробного плана действий, анализ ключевых показателей производительности (KPI) и финансовых результатов.',
    classTitle: u.uslugi__item__titleTwo,
    classSubtitle: u.uslugi__item__subtitleTwo
  },
  {
    icon: icon2,
    title: 'Маркетинг и продажи',
    subtitle: 'Создание комплекса стратегий для привлечения клиентов, формирования уникального предложения и увеличения продаж через эффективные маркетинговые кампании и управление брендом.',
    classTitle: u.uslugi__item__title,
    classSubtitle: u.uslugi__item__subtitle
  },
  {
    icon: icon3,
    title: 'Управление финансами',
    subtitle: 'Оптимизация учета, планирования и контроля финансовых ресурсов компании с помощью бюджетирования, управления оборотным капиталом и разработки стратегий финансирования.',
    classTitle: u.uslugi__item__title,
    classSubtitle: u.uslugi__item__subtitle
  },
  {
    icon: icon4,
    title: 'Маркетинговый анализ',
    subtitle: 'Оценка рыночной среды, включая анализ конкурентов, трендов, потребительского спроса, ценовой стратегии, инноваций и дифференциации продукта, для разработки эффективных маркетинговых решений.',
    classTitle: u.uslugi__item__title,
    classSubtitle: u.uslugi__item__subtitle
  }
]

export default function Uslugi() {
  return (
    <section className={u.section__uslugi}>
      <div className="container">
        <p className={u.uslugi__title}>Чем я могу помочь ?</p>

        <div className={u.uslugi}>
          {uslugiData.map((item, idx) => (
            <div className={u.uslugi__item} key={idx}>
              <img src={item.icon} className={u.uslugi__item__icon} alt={item.title} />
              <p className={item.classTitle}>{item.title}</p>
              <p className={item.classSubtitle}>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
