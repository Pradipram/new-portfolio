import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { skillsStyle } from "../styles";
import { skills } from "../assets";

const Skills = () => {
  return (
    <div className={skillsStyle.skills}>
      <h1>Skills</h1>
      <div className={skillsStyle.skillContainer}>
        {skills.map((skill) => (
          <div key={skill.id}>
            <Card className={skillsStyle.skillCard}>
              <CardActionArea>
                {skill.image && (
                  <CardMedia
                    component="img"
                    image={skill.image}
                    alt={skill.title}
                    height={100}
                    width={100}
                    sx={{ objectFit: "contain", margin: "5px 0px" }}
                  />
                )}
                <CardContent>
                  <Typography variant="h5">{skill.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
