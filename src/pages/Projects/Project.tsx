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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ProjectInterface } from "../../assets";
import { FC } from "react";
import { projectsStyle } from "../../styles";

const responsive = {
  AllDevie: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 5,
  },
};

export interface ProjectProps {
  project: ProjectInterface;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <Card className={projectsStyle.projectCard}>
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
          <Typography gutterBottom variant="h5" sx={{ margin: 0 }}>
            {project.name.length <= 20 ? (
              project.name
            ) : (
              <span className={projectsStyle.slidingHeading}>
                {project.name}
              </span>
            )}
          </Typography>
          <Typography
            sx={{ minHeight: "4.5em", display: "block" }}
            variant="body2"
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{ position: "relative" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          // autoPlay={true}
          autoPlay={project.skills.length > 5}
          autoPlaySpeed={2000}
          removeArrowOnDeviceType={["AllDevie"]}
        >
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
        </Carousel>
      </div>
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
  );
};

export default Project;
