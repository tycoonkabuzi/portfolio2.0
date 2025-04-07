import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./layouts/Home";
import Portfolio from "./layouts/Portfolio";
import Header from "./components/Header";
import Skills from "./layouts/Skills";
import Contact from "./layouts/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Header />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
