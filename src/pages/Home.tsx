import { homeStyle } from "../styles";
import { profile } from "../assets";
import Tooltip from "@mui/material/Tooltip";
import { Zoom } from "@mui/material";

import { homeDetails } from "../assets";

const Home = () => {
  // const centerX = 238;
  const centerX = 255;
  // const centerY = 113.8;
  const centerY = 135;
  const radius = 170;

  const calculatePosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle) - 20; // Adjust for element width
    const y = centerY + radius * Math.sin(angle) - 20; // Adjust for element height
    return { left: `${x}px`, top: `${y}px`, angle };
  };

  const getTooltipPlacement = (angle: number) => {
    if (angle >= 0 && angle < Math.PI / 2) return "right";
    if (angle >= Math.PI / 2 && angle < Math.PI) return "bottom";
    if (angle >= Math.PI && angle < (3 * Math.PI) / 2) return "left";
    return "top";
  };

  return (
    <div className={homeStyle.App}>
      <div className={homeStyle.circle}>
        <img src={profile} alt="profile" className={homeStyle.profileImage} />
        {homeDetails.map((detail, index) => {
          const { left, top, angle } = calculatePosition(
            index,
            homeDetails.length,
          );
          const placement = getTooltipPlacement(angle);
          return (
            <a
              href={detail.href}
              key={detail.id}
              {...(detail.externalLink
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={{ left, top }}
            >
              <Tooltip
                title={detail.title}
                placement={placement}
                arrow
                slots={{ transition: Zoom }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      fontSize: "1.2rem",
                    },
                  },
                }}
              >
                <detail.icon style={{ height: 30, width: 30 }} />
              </Tooltip>
            </a>
          );
        })}
      </div>
      <div className={homeStyle.info}>
        {/* <div className={homeStyle.name}>
          <h3>Software Engineer</h3>
        </div> */}
        <h3 className={homeStyle.name}>Pradip Ram</h3>
        {/* <div > */}
        <h4 className={homeStyle.description}>Bachelor of Technology</h4>
        <h4 className={homeStyle.description}>
          Computer Science and Engineering
        </h4>
        <h4 className={homeStyle.description}>IIT (ISM) Dhanbad</h4>
        <h4 className={homeStyle.interest}>Full Stack Web Development</h4>
        <h4 className={homeStyle.interest}>Competetive Programming</h4>
        <h4 className={homeStyle.interest}>Data Structure and Algorithms</h4>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
