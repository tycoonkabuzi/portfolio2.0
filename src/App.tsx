import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./layouts/Home";
import Portfolio from "./layouts/Portfolio";
import Header from "./components/Header";
import Skills from "./layouts/Skills";
import Contact from "./layouts/Contact";

import { useState } from "react";
import UploadProject from "./components/dashboard/UploadProject";
import Dashboard from "./layouts/Dashboard";
import { ActiveState } from "./types/activeState";

function App() {
  const [active, setActive] = useState<ActiveState>({
    home: true,
    projects: false,
    skills: false,
    contact: false,
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Header />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route
          path="/admin"
          element={<Dashboard active={active} setActive={setActive} />}
        >
          <Route
            path="projects"
            element={<UploadProject active={active} setActive={setActive} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
