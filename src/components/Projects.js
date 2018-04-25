import React, { Component } from 'react';
import ProjectItem from './ProjectItem'


class Projects extends Component {

  render() {
    

    // if(this.props.projects){
    //   projectItems = this.props.projects.map(project => {
    //     console.log(project)
    //     return(
    //
    //       <ProjectItem project={project}/>
    //
    //
    //     )
    //   })
    // }
    return (
      <div>
        Hello, My name is {this.props.name} and I am {this.props.age} years old.
      </div>
    );
  }
}

export default Projects;
