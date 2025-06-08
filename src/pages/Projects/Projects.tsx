import { projectData } from "../../assets";
import { projectsStyle } from "../../styles";
import Project from "./Project";


const Projects = () => {
  return (
    <div className={projectsStyle.projects}>
      <h1>Projects</h1>
      <div className={projectsStyle.projectContainer}>
        {projectData.map((project) => (
          <Project project={project} key={project.id}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
