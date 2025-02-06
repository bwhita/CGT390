import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import image_man from "./assets/headshot-man.png";
import image_woman from "./assets/headshot-woman.png";
import Card from "./components/Card";
import Wrapper from "./components/wrapper";
import { useState } from 'react';

const App = () => {
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
  ];

  // const titles = [...newSet(profiles.map((profile) => profile.title))];

  // const [title, setTitle] = useState("");
  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  //   console.log(event.target.value);
  // }

  return(
    <>
    <header>
      <Navbar />
      </header>
      <main>
        <Wrapper>
        <h1>Profile App</h1>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          {profiles.map(item => <Card key = {item.email} {...item} />)}
        </Wrapper>
        {/* <Wrapper>
          <div className = "filter-wrapper">
            <div className = "filter--select">
              <label htmlFor = "title-select">Select a title:</label>

            </div>
          </div>
        </Wrapper> */}
        </main>
        </>
  );
};

export default App
