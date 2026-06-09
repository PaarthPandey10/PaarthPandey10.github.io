import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
              return (
                <li key={skills.skillName}>
                  <div className="skill-icon">
                    {skills.imageSrc ? (
                      <img
                        src={skills.imageSrc}
                        alt={skills.skillName}
                        className="skill-icon-img"
                      />
                    ) : (
                      <i className={skills.fontAwesomeClassname}></i>
                    )}
                  </div>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
