import React from "react";
import "./smallDeviceStyle.scss";

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  companyLogo?: string;
}

interface SmallDeviceExperienceProps {
  experiences: Experience[];
}

const SmallDeviceExperience: React.FC<SmallDeviceExperienceProps> = ({
  experiences,
}) => {
  return (
    <div className="experienceBody">
      {experiences.map((exp) => (
        <div key={exp.id}>
          <h3 className="role">{exp.role}</h3>
          <p>
            {exp.company} • {exp.location}
          </p>
          <p className="duration">{exp.duration}</p>
          <ul className="description">
            {exp.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div>
            {exp.technologies.map((tech, index) => (
              <span key={index}>{tech} • </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallDeviceExperience;
