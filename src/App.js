import "./styles.css";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  // const [homeIsActive, setHomeActive] = useState(true);
  // const [aboutIsActive, setAboutActive] = useState(true);
  // const [contactIsActive, setContactActive] = useState(true);
  const [state, setState] = useState(true);
  const [about, setAbout] = useState(true);
  const [contact, setContact] = useState(true);
  // const addHome = () => {
  //   setState("");
  // };
  const addAbout = () => {
    // setAboutActive(!aboutIsActive);
    setAbout(!about);
  };
  const addContact = () => {
    // setContactActive(!contactIsActive);
    setContact(!contact);
  };
  const handleToggle = () => {
    // setHomeActive(!homeIsActive);
    setState(!state);
  };

  return (
    <div className="App">
      <div className="btn">
        <div className={state ? "home" : null}>
          <button onClick={handleToggle}>Home</button>
        </div>
        <div className={about ? "home" : null}>
          <button onClick={addAbout}>About</button>
        </div>
        <div className={contact ? "home" : null}>
          <button onClick={addContact}>Contact</button>
        </div>
      </div>
      <div className="content">
        <div className={state ? "c1" : null}>{state ? <Home /> : ""}</div>
        <div className={about ? "c1" : null}>{about ? <About /> : ""}</div>
        <div className={contact ? "c1" : null}>{contact ? <Contact /> : ""}</div>
      </div>
    </div>
  );
}
