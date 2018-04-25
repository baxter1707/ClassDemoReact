import React, { Component } from 'react';
import './App.css';
import Projects from "./components/Projects"
import ProjectItem from "./components/ProjectItem"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [{
        title: "Digital Crafts",
        category: "Coding Boot camp"
      },
      {
        title: "U of H",
        category: "Houston Public University "
      },
      {
        title: "UT",
        category: "Texas Public University"
      }]

    }
  }
  render() {
    return (
      <div>
        <Projects projects={this.state.projects} name={'Michael'} age={'28'} />
        <ProjectItem projects ={this.state.projects} />
      </div>
    );
  }
}

export default App;
