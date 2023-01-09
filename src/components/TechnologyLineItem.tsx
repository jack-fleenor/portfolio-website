import aws from '../assets/icons/aws.png'
import react from '../assets/icons/react.png'
import vue from '../assets/icons/vue.png'
import typescript from '../assets/icons/typescript.png'
import django from '../assets/icons/django.png'
import node from '../assets/icons/node.png'
import flask from '../assets/icons/flask.png'
import python from '../assets/icons/python.png'

const technologyIcons : { [key: string]: string } = {
  "Amazon Web Services": aws,
  "React": react,
  "Vue 3": vue,
  "Typescript": typescript,
  "Node": node,
  "Python": python,
  "Django": django,
  "Flask": flask
}

const TechnologyLineItem = (props: any) => {
  const { technology, isMobile } = props;

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {
      !isMobile ? <>
        <img src={technologyIcons[technology]} style={{width: '25px', marginRight: '15px'}}  />
        <h4>
          { technology }
        </h4>
      </> : <div>
        <img src={technologyIcons[technology]} style={{width: '25px'}}  />
      </div> 
    }

  </div>
}

export default TechnologyLineItem;