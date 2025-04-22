
import u from './blog.module.scss'
import '../Style/app.scss'

import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';

export default function Blog () {

    const blogData = [
        {
          videoUrl: 'https://www.youtube.com/watch?v=RK59rYZ6voM',
          date: '4 Июл, 2024',
          author: 'Анвар Халиков',
          title: 'Шолпан Тусипбекова:',
          subtitle: 'Как Совмещать Семью и Успешный Бизнес',
        },

        {
            videoUrl: 'https://www.youtube.com/watch?v=gTPQ_ZP1UDs',
            date: '7 мая, 2024',
            author: 'Анвар Халиков',
            title: 'TIKSAN GROUP',
            subtitle: 'ВСТРЕЧА ДРУЗЕЙ: СЕКРЕТЫ ЛИДЕРСТВА, МОТИВАЦИИ И О РАЗВИТИИ БИЗНЕСА',
          },

          {
            videoUrl: 'https://www.youtube.com/watch?v=H8rHsKdw69w',
            date: '27 апр, 2024',
            author: 'Анвар Халиков',
            title: 'Светланы Тон, поговорим о жизни, об успехе и карьере.',
            subtitle: 'ОТКРОВЕННАЯ БЕСЕДА О ЖИЗНИ, ОБ УСПЕХЕ И КАРЬЕРЕ / ЧАСТЬ 1',
          },

          {
            videoUrl: 'https://www.youtube.com/watch?v=XVIofrfDn8w',
            date: '30 апр, 2024',
            author: 'Анвар Халиков',
            title: 'Светланы Тон, поговорим о жизни, об успехе и карьере.',
            subtitle: 'ОТКРОВЕННАЯ БЕСЕДА О ЖИЗНИ, ОБ УСПЕХЕ И КАРЬЕРЕ / ЧАСТЬ 2',
          },


      ];
    
    return (

        <>
        
        <section className={u.section__uslugi} id='blog'>
            
            <div className="container">

                <p className={u.uslugi__title}>
                Мои последние новости
                </p>


                <div className={u.uslugi}>

                {blogData.map((item, index) => (

             <div key={index} className={u.uslugi__item}>

              <div className={u.uslugi__videoWrapper}>

       <ReactPlayer
        url={item.videoUrl}
        className={u.uslugi__videoWrapper__vd}
        width="100%"
        controls
      />

              </div>

              <div className={u.uslugi__meta}>
                <span>{item.date}</span> • <span>от {item.author}</span>
              </div>
              <p className={u.uslugi__item__title}>{item.title}</p>
              <p className={u.uslugi__item__subtitle}>{item.subtitle}</p>
            </div>

          ))}

                </div>

                <div className={u.uslugi__center}>
                    
                    <Link to='https://www.youtube.com/@AnvarKhalikov/videos' className={u.uslugi__center__btn}>Просмотреть все новости</Link>

                </div>

                
            </div>

        </section>
        

        </>
        
    )

}