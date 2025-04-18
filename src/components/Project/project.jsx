import u from './project.module.scss'
import '../Style/app.scss'

import { Link } from 'react-router-dom'

import icon1 from '../../images/project/IMG_9715.JPG'
import icon2 from '../../images/project/IMG_9716.JPG'
import icon3 from '../../images/project/IMG_9717.JPG'
import icon4 from '../../images/project/IMG_9718.JPG'
import icon5 from '../../images/project/IMG_9719.JPG'
import icon6 from '../../images/project/IMG_9720.JPG'
import strelka from '../../images/icon/icons8-стрелка-50.png'

const projectData = [
  {
    title: 'AslZar',
    subtitle: 'Сеть ювелирных домов и первый маркетплейс ювелирных украшений в Узбекистане',
    img: icon2,
    link: 'http://aslzar.uz/',
    classTitle: u.uslugi__item__titleTwo,
    classSubtitle: u.uslugi__item__subtitleTwo
  },
  {
    title: 'OBBO Marketplace',
    subtitle: 'Первый маркетплейс в Таджикистане',
    img: icon1,
    link: 'https://obbo.tj/',
    classTitle: u.uslugi__item__title,
    classSubtitle: u.uslugi__item__subtitle
  },
  {
    title: 'Kredit Market',
    subtitle: 'Сеть магазинов электроники и бытовой техники',
    img: icon3,
    link: 'https://kreditmarket.tj/',
    classTitle: u.uslugi__item__title,
    classSubtitle: u.uslugi__item__subtitle
  },
  {
    title: 'Babolo Group',
    subtitle: 'Группа компаний, работающая в следующих направлениях: Babolo Education, Babolo taxi, Babolo Shop',
    img: icon4,
    link: 'https://www.instagram.com/babolo_education/',
    classTitle: u.uslugi__item__title,
    classSubtitle: u.uslugi__item__subtitle
  },
  {
    title: 'Международная холдинговая компания UDI International',
    subtitle: 'Член совета директоров: UDI International, CEO UDI Tajikistan',
    img: icon5,
    link: 'https://davlatov.world/?page_id=340',
    classTitle: u.uslugi__item__title,
    classSubtitle: u.uslugi__item__subtitle
  },
  {
    title: 'Микрокредитная депозитная организация «Сандук»',
    subtitle: 'Член совета директоров',
    img: icon6,
    link: 'https://sanduk.tj/glavnaya/',
    classTitle: u.uslugi__item__title,
    classSubtitle: u.uslugi__item__subtitle
  }
]

export default function Project() {
  return (
    <section className={u.section__uslugi}>
      <div className="container">
        <p className={u.uslugi__title}>Мои последние проекты</p>

        <div className={u.uslugi}>
          {projectData.map((item, idx) => (
            <Link to={item.link} target="_blank" className={u.uslugi__item} key={idx}>
              <img src={item.img} className={u.uslugi__item__icon} alt={item.title} />
              <img src={strelka} alt="svg" className={u.uslugi__item__st} />
              <p className={item.classTitle}>{item.title}</p>
              <p className={item.classSubtitle}>{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
