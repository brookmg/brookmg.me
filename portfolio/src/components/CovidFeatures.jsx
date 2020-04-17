import React, {Component} from 'react'
import ProjectItem from './ProjectItem.jsx'
import Kuwas from '../img/Kuwas.png'
import Azemari from '../img/Azemari.png'
import Hulu from '../img/Hulu.png'
import Flick from '../img/Flick.png'
import FeatureItem from "./FeatureItem";

class CovidFeatures extends Component {

    render() {
        return (
            <section className="hero" style={{ backgroundColor: '#3700B3', color: 'white' }}>
                <div className="container">
                    <div className="hero-body section projects" style={{width: `100%`}}>
                        <h1 className="is-size-4" style={{ fontWeight: 700, textAlign: 'left' }}> Features </h1>
                        <div className="columns is-centered">
                            <FeatureItem
                                featureName="Statistics"
                                featureImage="stats.svg"
                                featureDescription="An updated information on scale and distribution of the virus in Ethiopia" />
                            <FeatureItem
                                featureName="Language"
                                featureImage="lang.svg"
                                featureDescription="The app is made available in varies languages such as Amharic, Affan Oromo and Tigrignya" />
                            <FeatureItem
                                featureName="News"
                                featureImage="news.svg"
                                featureDescription="The latest news around the virus. From credible sources like @WHO , @MOH ... " />
                            <FeatureItem
                                featureName="Questionnaire"
                                featureImage="form.svg"
                                featureDescription="A questionnaire to keep track of areas where people are feeling unwell" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default CovidFeatures;
