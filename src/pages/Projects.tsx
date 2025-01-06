import React from "react";
import { projectsStyle } from "../styles";
import { projectData } from "../assets";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";

const Projects = () => {
  return (
    <div className={projectsStyle.projects}>
      <h1>Projects</h1>
      <div className={projectsStyle.projectContainer}>
        {projectData.map((project) => (
          <Card key={project.id} className={projectsStyle.projectCard}>
            <CardActionArea
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.name}
                height={140}
              />
              <CardContent sx={{ padding: 0, marginTop: "10px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  //   component="div"
                  sx={{ margin: 0 }}
                >
                  {project.name}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
                <div className={projectsStyle.skills}>
                  {project.skills.map((skill, index) => (
                    <Tooltip
                      key={index}
                      title={skill.name}
                      placement="top"
                      arrow
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "#2c3e50",
                            color: "#ecf0f1",
                            fontSize: "0.875rem",
                            padding: "8px 16px",
                            borderRadius: "4px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                          },
                        },
                        arrow: {
                          sx: {
                            color: "#2c3e50",
                          },
                        },
                      }}
                    >
                      <img
                        src={skill.src}
                        alt="skill"
                        style={{ width: "40px", height: "40px", margin: "5px" }}
                      />
                    </Tooltip>
                  ))}
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {project.links.map((link, index) => (
                <Button
                  key={index}
                  size="small"
                  // color="primary"
                  href={link.url}
                  variant="contained"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={projectsStyle.button}
                >
                  {link.name}
                </Button>
              ))}
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
