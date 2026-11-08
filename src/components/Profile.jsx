import './Profile.css'

function Profile({ avatarSrc, avatarAlt, username, avatarSize }) {
  return (
    <header className="profile">
      <img
        className="profile__avatar"
        src={avatarSrc}
        alt={avatarAlt}
        width={avatarSize}
        height={avatarSize}
      />
      <p className="profile__username">{username}</p>
    </header>
  )
}

export default Profile
