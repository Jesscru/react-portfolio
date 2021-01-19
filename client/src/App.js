import React from "react";
import "./styling/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

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
