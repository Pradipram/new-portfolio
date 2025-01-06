import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { educationStyle } from "../styles";
import { educationDetails } from "../assets";
import PropTypes from "prop-types";
// import { useEffect, useState } from "react";

interface EducationProps {
  isSmallScreen: boolean;
}

const Education: React.FC<EducationProps> = ({ isSmallScreen }) => {
  return (
    <div className={educationStyle.education}>
      <div className={educationStyle.timeline}>
        <h1>Education details</h1>
        {/* <br/> */}
        <Timeline position={isSmallScreen ? "right" : "alternate"}>
          {educationDetails.map((education) => (
            <TimelineItem
              key={education.id}
              sx={{
                "&::before": {
                  // Hide the TimelineOppositeContent space on small screens
                  [isSmallScreen ? "display" : ""]: "none",
                },
              }}
            >
              {!isSmallScreen && (
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                >
                  <span className={educationStyle.date}>{education.date}</span>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator
                sx={{
                  marginLeft: isSmallScreen ? "calc(100% - 100%)" : 0,
                  position: "relative",
                }}
              >
                <TimelineConnector />
                <TimelineDot>
                  <education.icon className={educationStyle.icon} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <div>
                  <div className={educationStyle.content}>
                    <h2>{education.program}</h2>
                    {education.program ? <h3>{education.branch}</h3> : null}
                    <h2>{education.institute}</h2>
                    <h3>{education.location}</h3>
                    <h3>{education.score}</h3>
                  </div>
                  {isSmallScreen && (
                    <span className={educationStyle.date}>
                      {education.date}
                    </span>
                  )}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};
Education.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};

export default Education;
