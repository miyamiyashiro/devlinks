import Profile from './components/Profile'
import avatarDark from './assets/luana-original.jpg'
import './App.css'

function App() {
  return (
    <main className="devlinks" aria-label="Links do perfil">
      <Profile
        avatarSrc={avatarDark}
        avatarAlt="Foto de Luana M"
        username="Luana M"
        avatarSize={112}
      />
    </main>
  )
}

export default App
