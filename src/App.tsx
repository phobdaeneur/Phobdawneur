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
import Tailwind from "./document/react/tailwind";
import Tables from "./document/react/table";
import Buttons from "./document/react/button";
import LoginForm from "./document/react/loginForm";
import Template1 from "./document/react/login/template1";
import Template2 from "./document/react/login/template2";
import Template3 from "./document/react/login/template3";
import Texts from "./document/react/texts";

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
            <Route path="/tailwind" element={<Tailwind />} />
            <Route path="/table" element={<Tables />} />
            <Route path="/button" element={<Buttons />} />
            <Route path="/loginForm" element={<LoginForm />} />
            <Route path="/login1" element={<Template1 />} />
            <Route path="/login2" element={<Template2 />} />
            <Route path="/login3" element={<Template3 />} />
            <Route path="/text" element={<Texts />} />
          </Routes>
        </div>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
