import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Home,
  NotFound,
  Projects,
  Skills,
} from "./pages";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
