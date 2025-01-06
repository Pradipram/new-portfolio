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

// import { Footer } from "@p__radip/react-footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer websiteName="pradip portfolio" /> */}
      </Router>
    </div>
  );
}

export default App;
