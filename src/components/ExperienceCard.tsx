const ExperienceCard = (props: any) => {
  const { experience } = props;
  
  return <li key={experience.companyName} style={{ marginTop: '15px', display: 'flex' }}>
    <div>
      <h2 style={{ margin: '0px' }}>
        { experience.jobTitle }
      </h2>
      <h3 style={{ margin: '0px' }}>
        { experience.companyName }
      </h3>
      <h5 style={{ margin: '0px' }}>
        {experience.startDate} - {experience.endDate}
      </h5>
      <p>
        {experience.description}
      </p>
    </div>
  </li>
};

export default ExperienceCard;