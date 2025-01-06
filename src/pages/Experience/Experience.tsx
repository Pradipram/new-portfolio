import React from "react";
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  // TimelineDot,
  TimelineConnector,
  TimelineOppositeContent,
} from "@mui/lab";
import { Paper, Typography, Chip } from "@mui/material";
import { experiences } from "../../assets";
import "../../styles/experience.scss";
import SmallDeviceExperience from "./SmallDeviceExperience";

interface ExperienceProps {
  isSmallScreen: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isSmallScreen }) => {
  return (
    <div>
      {isSmallScreen ? (
        <SmallDeviceExperience experiences={experiences} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            className="heading"
          >
            Experience
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp) => (
              <TimelineItem key={exp.id}>
                <TimelineOppositeContent sx={{ color: "white" }}>
                  {exp.duration}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="company-logo"
                  >
                    {exp.companyLogo && (
                      <img src={exp.companyLogo} alt={exp.company} />
                    )}
                  </motion.div>
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h5" component="h3">
                      {exp.role}
                    </Typography>
                    <Typography color="textSecondary">
                      {exp.company} • {exp.location}
                    </Typography>
                    {/* <Typography variant="subtitle2">{exp.duration}</Typography> */}
                    <ul>
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="tech-stack">
                      {exp.technologies.map((tech) => (
                        <Chip key={tech} label={tech} />
                      ))}
                    </div>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
