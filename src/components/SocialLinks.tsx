import linkedin from '../assets/icons/linkedin.png'
import codepen from '../assets/icons/codepen.png'
import github from '../assets/icons/github.png'

const SocialLink = (props: any) => {
  const { social } = props;
  const followLink = (link: string) => {
    window.open(link, "_blank") //to open new page
  }
  return <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15px' }} onClick={() => followLink(social.link)}>
      <img src={social.icon} style={{width: '25px', marginRight: '15px'}}  />
      { social.name }
  </button>
}

const SocialLinks = () => {
  const socials = [
    {
      icon: linkedin,
      link: 'https://www.linkedin.com/in/jack-fleenor/',
      name: 'LinkedIn',
      type: 'external'
    },
    {
      icon: github,
      link: 'https://github.com/jack-fleenor',
      name: 'Github',
      type: 'external'
    },
    {
      icon: codepen,
      link: 'https://codepen.io/jack-fleenor',
      name: 'CodePen',
      type: 'external'
    }
  ]
  return <div style={{display: 'flex'}}>
    { socials.map(social => <SocialLink social={social} /> ) }
  </div>
};

export default SocialLinks;