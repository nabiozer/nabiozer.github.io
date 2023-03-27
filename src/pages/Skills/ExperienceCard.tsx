import React from 'react'

type Props = {
    role: string;
    startDate:string;
    company:string;
    description:string[];
    endDate:string;
}


const ExperienceCard = ({role,company,startDate,description,endDate}: Props) => {
  return (

   <div className="experience-card">
        <h5>{role}</h5>
        <p>{company} - {startDate} - {endDate}</p>
        <ul className="techlist">{description.map((description,i) => <li key={i}>{description}</li>)}</ul>
  </div>
  )
}

export default ExperienceCard