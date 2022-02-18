import React, { Component } from "react";
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Home from "./components/home/Home";
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  componentDidMount = () => {
    this.loadPortfolioData();
    this.getProjectsAndSkills();
  }

  getProjectsAndSkills = () => {
    const resumePath = `projectsAndSkills.json`;
    this.loadResumeFromPath(resumePath);
  }

  loadResumeFromPath = path => {
    axios(path)
    .then(response => {
      this.setState({ resumeData: response.data })
    })
    .catch(error => {
      console.log(error);
    })
  }

  loadPortfolioData = () => {
    const url = `portfolioData.json`
    
    axios(url)
    .then(response => {
      this.setState({ sharedData: response.data });
      document.title = `${this.state.sharedData.basic_info.name}`;
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <Router>
        <Header sharedData={this.state.sharedData.basic_info} />
        <Switch>
          <Route exact path="/">
            <Home
              resumeData={this.state.resumeData}
              sharedData={this.state.sharedData}
            />
          </Route>
          <Route path="/about">
            <About
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
            />
          </Route>
        </Switch>
        <Footer 
          sharedBasicInfo={this.state.sharedData.basic_info}
          getProjectsAndSkills={this.getProjectsAndSkills} 
        />  
      </Router>
    );
  }
}

export default App;