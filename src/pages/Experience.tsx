import { motion } from "framer-motion";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
} from "@mui/lab";
import { Paper, Typography, Chip } from "@mui/material";
import { experiences } from "../assets";
import "../styles/experience.scss";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h2" align="center" gutterBottom className="heading">
        Experience
      </Typography>

      <Timeline position="alternate">
        {experiences.map((exp) => (
          <TimelineItem key={exp.id}>
            <TimelineSeparator>
              <motion.div whileHover={{ scale: 1.2 }} className="company-logo">
                {exp.companyLogo && (
                  <img src={exp.companyLogo} alt={exp.company} />
                )}
              </motion.div>
            </TimelineSeparator>

            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" component="h3">
                  {exp.role}
                </Typography>
                <Typography color="textSecondary">
                  {exp.company} • {exp.location}
                </Typography>
                <Typography variant="subtitle2">{exp.duration}</Typography>

                <ul>
                  {exp.description.map((item, index) => (
                    <li key={index} className="description">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {exp.technologies.map((tech) => (
                    <Chip key={tech} label={tech} sx={{ margin: "5px" }} />
                  ))}
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
};

export default Experience;
