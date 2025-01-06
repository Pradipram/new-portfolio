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
    const x = centerX + radius * Math.cos(angle) - 20;
    const y = centerY + radius * Math.sin(angle) - 20;
    return { left: `${x}px`, top: `${y}px` };
  };

  return (
    <div className={homeStyle.App}>
      <div className={homeStyle.circle}>
        <img src={profile} alt="profile" className={homeStyle.profileImage} />
        {homeDetails.map((detail, index) => {
          const position = calculatePosition(index, homeDetails.length);
          return (
            <a
              // className={homeStyle[detail.className]}
              href={detail.href}
              key={detail.id}
              {...(detail.externalLink
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={position}
            >
              <Tooltip
                title={detail.title}
                placement={detail.TooltipPlacement}
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
