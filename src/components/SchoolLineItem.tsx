import osu from '../assets/icons/osu_icon.png'
import uvaw from '../assets/icons/uva-wise_icon.png'

const schoolIcons : { [key: string]: string } = {
  "Oregon State University": osu,
  "University of Virginia's College at Wise": uvaw
}

const SchoolLineItem = (props: any) => {
  const { school, isMobile } = props;

  return <div style={{paddingBottom: '15px'}}>
    {
      !isMobile ? <>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={schoolIcons[school.schoolName]} style={{width: '50px', height: '50px', padding: '5px'}}  />
        <h3>
          { school.schoolName }
        </h3>
      </div>
      <div>
        { school.startDate } - { school.endDate }
      </div>
      <h4>
        { school.program }
      </h4>
      </> : <div>
        <img src={schoolIcons[school]} style={{width: '25px'}}  />
      </div> 
    }

  </div>
}

export default SchoolLineItem;