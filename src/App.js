import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div >
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />      
      </div>
    </Router>
    </div>
  );
}

export default App;
