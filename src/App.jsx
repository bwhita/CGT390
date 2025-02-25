import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfile from "./pages/AddProfile";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route} from "react-router-dom";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import ProfileLayoutPage from "./pages/ProfileLayoutPage";


    // "react-router-dom": "^7.1.5"

const App = () => {

  const [mode, setMode] = useState("light")
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return(
    <HashRouter>
    <header>
      <Navbar mode = {mode} updateMode = {handleModeChange} />
      </header>
      <main className = {mode === "light" ? "light" : "dark"}>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/add-profile" element = {<AddProfile />} />
        <Route path = "/about" element = {<AboutPage />} />
        <Route path = "*" element = {<NotFound />} />
        <Route path = "/profile/:id" element = {<ProfileLayoutPage />} >
        <Route index element ={<ProfileDetailPage/>} />
        <Route path = "edit" element = {<ProfileEditPage />} />
        </Route>
      </Routes>
      </main>
      </HashRouter>
    );    
};

export default App
