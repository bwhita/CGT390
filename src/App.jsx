import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import image_man from "./assets/headshot-man.png";
import image_woman from "./assets/headshot-woman.png";
import Card from "./components/Card";
import Wrapper from "./components/wrapper";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
//import { useEffect } from "react";
//import { use } from "react";

const App = () => {
  //lab09
  //const [profiles, setProfiles] = useState([]);
  //useEffect (() => (
    //))

  const profiles = [
    {
      img: image_man,
      name: "John Doe",
      title: "Software Engineer",
      email: "a@a.com",
    },
    {
      img: image_woman,
      name: "Jane Doe",
      title: "Software Engineer",
      email: "b@b.com",
    },
    {
      img: image_man,
      name: "Brian Doe",
      title: "UX Designer",
      email: "c@c.com",
    },
    {
      img: image_woman,
      name: "Jan Johnson",
      title: "Web Developer",
      email: "d@d.com",
    },
    {
      img: image_man,
      name: "Bob Williamson",
      title: "Graphic Designer",
      email: "e@e.com",
    },
    {
      img: image_man,
      name: "Authur Morgan",
      title: "Web Developer",
      email: "f@f.com",
    },
  ];

  const [animation, setAnimation] = useState(false);
  const handleAnimation = () => {
    setAnimation(false);
  };

  const [mode, setMode] = useState("light");
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const titles = [...new Set(profiles.map((profile) => profile.title))];

  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setAnimation(true);
  };

  const handleClear = () => {
    setTitle("");
    setSearch("");
  };

  const filteredProfiles = profiles.filter(
    (profile) =>
    (title === "" || profile.title === title) &&
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  const buttonStyle = {
    border: "1px solid #ccc",
  };

  return(
    <>
    <header>
      <Navbar mode = {mode} updateMode = {handleModeChange}/>
      </header>
      <main className = {mode === "light" ? "light" : "dark"}>
        <Wrapper>
        <h1>Profile App</h1>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <div className = "filter-wrapper">
            <div className = "filter--select">
              <label htmlFor = "title-select">Select a title:</label>
              <select
                id="title-select"
                onChange = {handleTitleChange}
                value = {title}
                >
                  <option value = "">All</option>
                  {titles.map((title) => (
                    <option key = {title} value = {title}>
                      {title}
                    </option>
                  ))}
                </select>
            </div>
            <div className = "filter--search">
              <label  htmlFor = "search">Search by name:</label>
              <input
              type = "text"
              id = "search"
              onChange = {handleSearchChange}
              value = {search}
              />
            </div>
            <button onClick = {handleClear} style = {buttonStyle}>
              <span className = "sr-only">Reset</span>
              <FontAwesomeIcon icon = {faXmark} />
            </button>
          </div>
          <div className = "profile-wrapper">
          {filteredProfiles.map((profile) => (
            <Card
              key = {profile.email}
              {...profile}
              animate = {animation}
              updateAnimate = {handleAnimation}
              />
          ))}
          {/* (item => <Card key = {item.email} {...item} />)} */}
          </div>
        </Wrapper>
        </main>
        </>
  );
};

export default App
