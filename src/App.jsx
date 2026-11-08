import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'
import LinkButton from './components/LinkButton'
import { links } from './data/links'
import avatarDark from './assets/luana-original.jpg'
import avatarLight from './assets/luana-sunglasses.png'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('devlinks-theme') === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('devlinks-theme', theme)
    } catch {
      // A troca continua funcionando se o navegador bloquear o armazenamento.
    }
  }, [theme])

  const isLight = theme === 'light'

  return (
    <main className="devlinks" aria-label="Links do perfil">
      <Profile
        avatarSrc={isLight ? avatarLight : avatarDark}
        avatarAlt={isLight ? 'Luana M usando óculos escuros' : 'Foto de Luana M'}
        username="Luana M"
        avatarSize={112}
      />
      <ThemeToggle
        isLight={isLight}
        onToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
      />
      <nav aria-label="Links de Luana M">
        <ul className="link-list">
          {links.map(link => (
            <li key={link.id}>
              <LinkButton label={link.label} href={link.href} />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

export default App
