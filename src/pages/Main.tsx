import React from 'react'
import resume from '../data/resume.json';

const ExperienceCard = (props: any) => {
  const { experience } = props;
  
  return <li key={experience.companyName} style={{ marginTop: '15px' }}>
    <h3 style={{ margin: '0px' }}>
      { experience.jobTitle }
    </h3>
    <h3 style={{ margin: '0px' }}>
      { experience.companyName }
    </h3>
    <h5 style={{ margin: '0px' }}>
      {experience.startDate} - {experience.endDate}
    </h5>
    <div style={{display: 'flex'}}>
        { experience.tags.map( (tag: any, index: number) => <code key={index} style={{marginRight: '15px', fontStyle: 'italic'}}>{tag}</code>  ) }
    </div>
    <div>
      Description: {experience.description}
    </div>
  </li>
};

const Main = () => {
  const [ count, setCount ] = React.useState(0)
  const [ language, setLanguage ] = React.useState(0)
  const greetings = [ "Hello, my name's", "你好，我叫" ];
  
  const languages = [ "EN", "汉字" ];

  const styles = {
    active: {
      backgroundColor: 'white',
      color: 'black'
    },
    disabled: {}
  };
  
  return (
    <div className="App">
      <h1 style={{ marginBottom: '10px' }}>{greetings[language]} Jack</h1>
      <button style={ language == 0 ? styles.active : styles.disabled } onClick={() => setLanguage(0)}>
        { languages[0] }
      </button>
      <button style={ language == 1  ? styles.active : styles.disabled } onClick={() => setLanguage(1)}>
        { languages[1] }
      </button>
      <h3> { resume.summary } </h3>
      <div>
        <ul style={{listStyleType: 'none'}}>
          {
            resume.experience.map(item => <ExperienceCard experience={item}/> )
          }
        </ul>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        { resume.summary }
      </p>
    </div>
  )
}

export default Main