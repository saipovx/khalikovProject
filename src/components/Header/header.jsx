import { useEffect, useState } from 'react'
import '../Style/app.scss'
import h from './header.module.scss'
import Logo from '../../images/icon/Logo.png'
import ScrollLink from '../../ScrollLink'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.body.classList.toggle('burger-open', menuOpen)
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)

      const sections = ['home', 'about', 'uslugi', 'project', 'blog', 'footer']
      let current = 'home'

      for (const id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const offsetTop = section.offsetTop - 300
          if (window.scrollY >= offsetTop) {
            current = id
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${h.header} ${scrolled ? h.headerScrolled : ''}`}>
      <div className='container'>
        <div className={h.header__nav}>
          <div className={h.header__logo}>
            <img src={Logo} alt="" />
          </div>

          <ul className={`${h.header__navigation} ${menuOpen ? h.open : ''}`}>
            <ScrollLink to="home" className={h.header__navigation__title} activeSection={activeSection} onClick={() => setMenuOpen(false)}>Главная</ScrollLink>
            <ScrollLink to="about" className={h.header__navigation__title} activeSection={activeSection} onClick={() => setMenuOpen(false)}>обо мне</ScrollLink>
            <ScrollLink to="uslugi" className={h.header__navigation__title} activeSection={activeSection} onClick={() => setMenuOpen(false)}>Мои услуги</ScrollLink>
            <ScrollLink to="project" offset={0} className={h.header__navigation__title} activeSection={activeSection} onClick={() => setMenuOpen(false)}>Проекты</ScrollLink>
            <ScrollLink to="blog" offset={0} className={h.header__navigation__title} activeSection={activeSection} onClick={() => setMenuOpen(false)}>Блог</ScrollLink>
            <ScrollLink to="footer" offset={100} className={h.header__navigation__title} activeSection={activeSection} onClick={() => setMenuOpen(false)}>Контакты</ScrollLink>
          </ul>

          <div className={`${h.burger} ${scrolled ? h.burgerScroll : ''}`} onClick={() => setMenuOpen(prev => !prev)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  )
}
