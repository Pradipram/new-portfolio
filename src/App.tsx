import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Education,
  Experience,
  Home,
  NotFound,
  Projects,
  Skills,
} from "./pages";
import { useEffect, useState } from "react";

// import { Footer } from "@p__radip/react-footer";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth);
      setIsSmallScreen(window.innerWidth <= 475);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home isSmallScreen={isSmallScreen} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/education"
            element={<Education isSmallScreen={isSmallScreen} />}
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/experience"
            element={<Experience isSmallScreen={isSmallScreen} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer websiteName="pradip portfolio" /> */}
      </Router>
    </div>
  );
}

export default App;
