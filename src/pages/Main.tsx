import SocialLinks from '../components/SocialLinks';
import ExperienceCard from '../components/ExperienceCard';
import TechnologyLineItem from '../components/TechnologyLineItem';
import logo_white from '../assets/logo_white.svg'
import resume from '../data/resume.json';
import '../App.css'
import React from 'react';
import SchoolLineItem from '../components/SchoolLineItem';

const Main = () => {
  const [ isMobile, setIsMobile ] = React.useState(false);
  
  const checkIsMobile = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }
  
  React.useEffect(() => {
    checkIsMobile();
  }, [])

  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo_white} style={{ height: '3em' }}/>
        <h1 style={{ margin: '5px' }}>Hello, my name's Jack</h1>
      </div>
      <SocialLinks />
      <div style={{paddingTop: '15px'}}> { resume.summary } </div>
      <h2>
        Technologies
      </h2>
      <ul style={{listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-around'}}>
        { resume.technologies.map(technology => <li key={technology}>
            <TechnologyLineItem technology={technology} isMobile={isMobile} />
        </li> ) }
      </ul>
      <div style={{ display: isMobile ? 'block': 'flex' }}>
        <div style={{ width: isMobile ? '100%': '20%' }}>
          <h2>
            Education
          </h2>
          <ul style={{listStyleType: 'none', padding: 0, display: isMobile ? 'flex': 'block', justifyContent: isMobile ? 'space-between': 'flex-start'}}>
            { resume.education.map(school => <li key={school.schoolName}>
                <SchoolLineItem school={school} isMobile={isMobile} />
            </li> ) }
          </ul>

        </div>
        <div style={{ width: isMobile ? '100%': '80%' }}>
          <h2>
            Experiences
          </h2>
          <ul style={{listStyleType: 'none'}}>
            { resume.experience.map(item => <ExperienceCard key={item.companyName} experience={item}/> ) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main