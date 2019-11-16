import React, {Component} from 'react'

class ProjectItem extends Component {

    constructor(probs) {
        super(probs);
        this.state = {
            projectName: probs.projectName,
            projectLink: probs.projectLink,
            projectDescription: probs.projectDescription,
            projectImage: probs.projectImage,
            projectPlacement: probs.projectPlacement
        }
    }

    render() {
        return (
            <div className="column has-text-centered is-one-quarter">
                <h2> { this.state.projectName } </h2>

                <img className="screenshot" src={ this.state.projectImage} width="200" height="500"/>
                <h3 className="has-text-black"><br/> { this.state.projectDescription } <br/><br/>
                    <a href={this.state.projectLink}> { this.state.projectPlacement } </a>
                </h3>
            </div>
        );
    }

}

export default ProjectItem;