import React, { Component } from 'react';


class ProjectItem extends Component {

  render() {
    let projectItems = this.props.projects
    let singleProject = projectItems.map(function(project, index){
      return(
        <div>
        <li key={index}> {project.title} </li>
        <p > {project.category} </p>
      </div>
      )
    })
    return (
      <div>
        <ul>
          {singleProject}
        </ul>
      </div>
    );
  }
}

export default ProjectItem;
