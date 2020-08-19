import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from './components/Footer';
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/projects"}>
            <Projects />
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} /> */}
          </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
