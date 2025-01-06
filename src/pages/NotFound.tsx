import { Button } from "@mui/material";
import { notFound } from "../assets";
import { notFoundStyle } from "../styles";

const NotFound = () => {
  return (
    <div className={notFoundStyle.notFound}>
      <img
        src={notFound}
        alt="not found page"
        height={500}
        style={{ margin: "10px" }}
      />
      <Button href="/" variant="contained">
        Home
      </Button>
    </div>
  );
};

export default NotFound;
