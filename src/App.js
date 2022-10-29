import React from "react";
import Header from "./components/Home/header";
import Footer from "./components/Home/footer";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import "./App.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Footer />
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p> Welcome to </p> <h1> Vizon Technical About Page </h1>{" "}
      </section>{" "}
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p> Welcome to </p> <h1> Vizon Technical Service Page </h1>{" "}
      </section>{" "}
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p> Welcome to </p> <h1> Vizon Technical Contact Page </h1>{" "}
      </section>{" "}
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/service">
        <Service />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>{" "}
    </Switch>
  );
};

export default App;
