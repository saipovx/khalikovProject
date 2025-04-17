import { useEffect, useState } from 'react'
import '../Style/app.scss'
import h from './header.module.scss'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

       // Запрет скролла при открытом меню
       useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('burger-open')
        } else {
            document.body.classList.remove('burger-open')
        }
    }, [menuOpen])

    return (
        <header className={h.header}>
            <div className='container'>

                <div className={h.header__nav}>
                    <div className={h.header__logo}>
                        AK
                    </div>

                    <ul className={`${h.header__navigation} ${menuOpen ? h.open : ''}`}>
                        <li className={h.header__navigation__title}>Главная</li>
                        <li className={h.header__navigation__title}>обо мне</li>
                        <li className={h.header__navigation__title}>Мои услуги</li>
                        <li className={h.header__navigation__title}>Проекты</li>
                        <li className={h.header__navigation__title}>Блог</li>
                        <li className={h.header__navigation__title}>Контакты</li>
                    </ul>

                    <div
                        className={h.burger}
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        <span />
                        <span />
                        <span />
                    </div>

                </div>
            </div>
        </header>
    )
}
