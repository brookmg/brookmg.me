import React, {Component} from 'react'
import FeatureItem from "./FeatureItem";

class CovidPrecautions extends Component {

    render() {
        return (
            <section className="hero" style={{ backgroundColor: '#3700B3', color: 'white' }}>
                <div className="container">
                    <div className="hero-body section projects" style={{width: `100%`}}>
                        <h1 className="is-size-4" style={{ fontWeight: 700, textAlign: 'left' }}> Precautions to take against COVID-19 </h1>
                        <div className="columns is-centered">
                            <FeatureItem
                                featureName="Wash your hands"
                                featureImage="wash_hands.svg"
                                featureDescription="You should wash your hands frequently for at least for 20seconds." />
                            <FeatureItem
                                featureName="Wear masks"
                                featureImage="wear_masks.svg"
                                featureDescription="There are asymptomatic people who have this virus and could spread it. Therefore, waring masks is advised" />
                            <FeatureItem
                                featureName="Cover your face"
                                featureImage="cover_face_coughing.svg"
                                featureDescription="Cover your face when sneezing or coughing. This will protect other people in the surrounding" />
                            <FeatureItem
                                featureName="Avoid contact"
                                featureImage="avoid_contact.svg"
                                featureDescription="Avoid contact with other people and keep your social distance until all this is over" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default CovidPrecautions;
