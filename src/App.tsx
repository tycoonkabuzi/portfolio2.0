import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./layouts/Home";
import Portfolio from "./layouts/Portfolio";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Header />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
