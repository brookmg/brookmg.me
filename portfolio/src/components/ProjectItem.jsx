import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons/faDotCircle";

class ProjectItem extends Component {

    constructor(probs) {
        super(probs);
        this.state = {
            projectName: probs.projectName,
            projectLink: probs.projectLink,
            projectStatus: probs.projectStatus,
            projectDescription: probs.projectDescription,
            projectImage: probs.projectImage,
            projectPlacement: probs.projectPlacement
        }
    }

    getBackgroundColorForStatusContainer = (status) => {
        if (typeof status === 'string') {
            if (status.toLowerCase().startsWith('active')) return '#33ac33';
            else if (status.toLowerCase().startsWith('dis')) return '#ac3333';
            else if (status.toLowerCase().startsWith('coming')) return '#bcbc33';
            else if (status.toLowerCase().startsWith('paused')) return '#425262';
        } else return '#ffffff'
    };

    render() {
        return (
            <div className="column has-text-centered is-one-quarter">
                <h2> { this.state.projectName } </h2>

                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {`${ this.state.projectStatus }`}
                        </p>

                        <span href="#" className="card-header-icon" style={{ textDecoration: 'none'}} aria-label="status">
                          <span className="icon">
                              <FontAwesomeIcon icon={ faDotCircle } color={ this.getBackgroundColorForStatusContainer(this.state.projectStatus) } />
                          </span>
                        </span>
                    </header>

                </div>

                <img className="screenshot" src={ this.state.projectImage} alt={`Preview for ${ this.state.projectName }`} width="200" height="500"/>
                <h3 className="has-text-black"><br/> { this.state.projectDescription } <br/><br/>
                    <a href={this.state.projectLink}> { this.state.projectPlacement } </a>
                </h3>
            </div>
        );
    }

}

export default ProjectItem;