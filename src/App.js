import React, { Component } from "react";
// import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import $ from "jquery";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Home from "./components/home/Home";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  getProjectsAndSkills = () => {
    const resumePath = `projectsAndSkills.json`;
    this.loadResumeFromPath(resumePath);
  }

  componentDidMount = () => {
    this.loadPortfolioData();
    this.getProjectsAndSkills();
  }

  loadResumeFromPath = path => {
    $.ajax({
      url: path,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (err) {
        alert(err);
      },
    });
  }
 
  // loadResumeFromPath = (path) => { 
  //   fetch('portfolioData.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(data){
  //       console.log(data)
  //       return data.json();
  //     })
  //     .then(function(data) {
  //       console.log({ resumeData: data }, 'this is resume data');
  //       this.setState({ resumeData: data });
  //     });
  // }


  loadPortfolioData = () => {
    $.ajax({
      url: `portfolioData.json`,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (err) {
        alert(err);
      },
    });
  }

  // loadPortfolioData = () => {
  //   fetch({
  //     url: `portfolioData.json`,
  //     dataType: 'json',
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ sharedData: data });
  //       document.title = `${this.state.sharedData.basic_info.name}`;
  //     }.bind(this),
  //     error: function (err) {
  //       alert(err);
  //     },
  //   });
  // }

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