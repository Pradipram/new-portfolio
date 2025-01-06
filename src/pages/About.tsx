// import { profile } from "../assets";
import { aboutStyle } from "../styles";
import { Tooltip } from "@mui/material";
import { detailProfile, SocialActivity } from "../assets";

const About = () => {
  return (
    <div className={aboutStyle.about}>
      <div className={aboutStyle.imageContainer}>
        <img src={detailProfile} alt="profile" className={aboutStyle.image} />
        <h1>Pradip Ram</h1>
      </div>
      <div className={aboutStyle.aboutContent}>
        <h1>About me</h1>
        <p className={aboutStyle.text}>
          I am Pradip Ram from Chatra Jharkhand, pursuing a bachelor of
          technology in computer science and engineering. I like problem-solving
          and am interested in Data Structures, algorithms, and Competitive
          Programming. I have solved over 500 problems across various platforms
          like Codeforces, Codechef, and Leetcode. I am also passionate about
          full-stack web development using mern stack technology, for which I
          have developed a blog website where users can share their blogs based
          on their interests. I have also developed an E-commerce website where
          users can view and purchase the products. I have done a 2 month
          internship at Veolia water technology and solution as digital intern.
        </p>
        <div className={aboutStyle.social}>
          {SocialActivity.map((item) => (
            <Tooltip title={item.title} arrow key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <item.icon height={50} />
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
