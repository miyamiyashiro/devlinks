import Profile from './components/Profile'
import avatarDark from './assets/avatar-dark.png'
import './App.css'

function App() {
  return (
    <main className="devlinks" aria-label="Links do perfil">
      <Profile
        avatarSrc={avatarDark}
        avatarAlt="Foto do perfil de referência do DevLinks"
        username="@seu.perfil"
        avatarSize={112}
      />
    </main>
  )
}

export default App
