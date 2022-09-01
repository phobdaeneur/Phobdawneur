import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import { StyledEngineProvider } from "@mui/material/styles";
import Library from "./document/react/library";
import ReactPage from "./document/reactPage";
import DesignPage from "./document/designPage";
import Figma from "./document/figma";

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/reactPage" element={<ReactPage />} />
            <Route path="/designPage" element={<DesignPage />} />
            <Route path="/figma" element={<Figma />} />
          </Routes>
        </div>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
