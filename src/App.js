import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import "./App.scss";

export default function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
