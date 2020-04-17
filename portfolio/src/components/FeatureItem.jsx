import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons/faDotCircle";

class FeatureItem extends Component {

    constructor(probs) {
        super(probs);
        this.state = {
            featureName: probs.featureName,
            featureLink: probs.featureLink,
            featureDescription: probs.featureDescription,
            featureImage: probs.featureImage,
            featurePlacement: probs.featurePlacement
        }
    }

    render() {
        return (
            <div className="column has-text-centered is-one-quarter">
                <img className="screenshot"
                     src={ this.state.featureImage}
                     alt={`Preview for ${ this.state.featureName }`}
                     style={{ width: 150, height: 150, padding: '5%' }}
                />

                <h2> { this.state.featureName } </h2>
                <h3 className="has-text-white"><br/> { this.state.featureDescription } <br/><br/>
                    <a href={this.state.featureLink}> { this.state.featurePlacement } </a>
                </h3>
            </div>
        );
    }

}

export default FeatureItem;
