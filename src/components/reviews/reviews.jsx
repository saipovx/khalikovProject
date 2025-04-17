import u from './reviews.module.scss'
import '../Style/app.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Reviwes() {
  const services = [
    {
      title: '- Камолиддин Ульмасов',
      description:
        'Я выражаю глубокую благодарность Анвару Вайдуллаевичу за его важный вклад в мой профессиональный рост. Его услуги по развитию бизнеса обогатили меня ценными знаниями и инструментами, которые сыграли ключевую роль в достижении успеха моего бизнеса. Я настоятельно рекомендую его услуги всем, кто стремится к процветанию своего предприятия.',
    },
    {
      title: '- Зокиров Улугбек',
      description:
        'Анвар Вайдуллаевич не только выдающийся предприниматель, но и заботливый наставник, готовый поддержать своих учеников на каждом этапе их профессионального развития. Его мудрые советы и постоянная поддержка оказались неоценимыми для моего личного и делового роста.',
    },
    {
      title: '- Кодиров Шахбоз',
      description:
        'Анвар Вайдуллаевич провел для нашей компании обучение по систематизации и стратегическому планированию бизнеса, и его выступление было просто великолепным! Его информативный, увлекательный и вдохновляющий спич позволил нам получить ценные знания, которые мы намерены успешно применить на практике. Мы глубоко признательны за этот опыт.',
    },
    {
      title: '- Нодирбек Махмудов',
      description:
        'Я воспользовался услугами Анвара Вайдуллаевича для консультации по стратегическому планированию моего бизнеса, и я был впечатлен его высоким уровнем профессионализма. Его экспертное сопровождение позволило мне разработать эффективную стратегию продвижения продукта и значительно увеличить объемы продаж. Я с уверенностью планирую обратиться к нему снова в будущем.',
    },
  ]

  return (
    <section className={u.section__uslugi}>
      <div className="container">
        <p className={u.uslugi__title}>Что говорят мои клиенты</p>

        <Swiper
          modules={[ Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          navigation={false}
        //   pagination={{ clickable: false }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{

            320: {
                slidesPerView: 1,
              },

            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className={u.uslugi}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={u.uslugi__item}>
                <p className={u.uslugi__item__subtitle}>{item.description}</p>
                <p className={u.uslugi__item__title}>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
