import { useState } from "react";
import "./App.css";
import "./components/component.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contract from "./components/Contract";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Profile />
      <Contract />
    </div>
  );
}

export default App;
