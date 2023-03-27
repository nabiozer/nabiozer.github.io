import React from "react";
import AnimatedText from "../../_components/App/AnimatedText";
import ExperienceCard from "./ExperienceCard";
import { SkillBar } from "./SkillBar";

type Props = {};
const experience = [
  {
    company: "Sekerbank",
    startDate: "07-2022",
    endDate:"-",
    role: "Frontend Developer",
    description: ["React.js","Javascript","Typescript","SCSS","MUI","Jira","Bitbucket","Bamboo"],
  },
];
const index = (props: Props) => {

  return (
    <section className="skills-container fullscreen" id="skills">
      <AnimatedText
        className="skills-description"
        header="Skills & Experience"
        desc="  Since beginning my journey as a Frontend developer nearly 1 years ago,I'm constantly improving myself.
          "
        link="https://www.linkedin.com/in/nabi-%C3%B6zer-252680113/"
        linkDescription="Visit my linkedn "
      />
      <div className="skills-exp">
        <SkillBar />
        <div className="experience-cardcontainer">
          {experience.map((item,i) => (
            <ExperienceCard
            key={i}
              company={item.company}
              startDate={item.startDate}
              endDate={item.endDate}
              role={item.role}
              description={item.description}
            ></ExperienceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
