import { links } from '../data/links'
import githubDark from '../assets/github-dark.svg'
import githubLight from '../assets/github-light.svg'
import instagramDark from '../assets/instagram-dark.svg'
import instagramLight from '../assets/instagram-light.svg'
import linkedinDark from '../assets/linkedin-dark.svg'
import linkedinLight from '../assets/linkedin-light.svg'
import './SocialLinks.css'

const socialIcons = [
  { id: 'github', name: 'GitHub', dark: githubDark, light: githubLight },
  { id: 'instagram', name: 'Instagram', dark: instagramDark, light: instagramLight },
  { id: 'linkedin', name: 'LinkedIn', dark: linkedinDark, light: linkedinLight },
]

export default function SocialLinks({ isLight }) {
  return (
    <nav aria-label="Redes sociais">
      <ul className="social-links">
        {socialIcons.map(social => (
          <li key={social.id}>
            <a
              href={links.find(link => link.id === social.id).href}
              aria-label={`${social.name} de Luana M (abre em nova aba)`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={isLight ? social.light : social.dark} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
