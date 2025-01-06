import { homeStyle } from "../styles";
import { profile } from "../assets";
import Tooltip from "@mui/material/Tooltip";
import { Zoom } from "@mui/material";

import { homeDetails } from "../assets";

const Home = () => {
  return (
    <div className={homeStyle.App}>
      <div className={homeStyle.circle}>
        <img src={profile} alt="profile" className={homeStyle.profileImage} />
        {homeDetails.map((detail) => (
          <a
            className={homeStyle[detail.className]}
            href={detail.href}
            key={detail.id}
            {...(detail.externalLink
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
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
        ))}
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
