import { MotionConfig } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import { projects } from "./data/projects";
import PointerFollower from "./components/PointerFollower";
import Index from "./pages/Index";
import People from "./pages/People";
import Expertise from "./pages/Expertise";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";

const App = () => (
  <MotionConfig reducedMotion="user">
    <PointerFollower />
    <BrowserRouter>
      <Routes>
        {projects.map((project) => (
          <Route key={project.slug} path={`/${project.slug}`} element={<Project project={project} />} />
        ))}
        <Route path="/" element={<Index />} />
        <Route path="/people" element={<People />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </MotionConfig>
);

export default App;
