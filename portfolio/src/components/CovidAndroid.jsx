import React, {Component} from 'react'
import CovidHero from "./CovidHero";
import CovidFeatures from "./CovidFeatures";
import CovidPrecautions from "./CovidPrecautions";
import CovidInfomatics from "./CovidInfomatics";

class CovidAndroid extends Component {

    render() {
        return <div>
            <section className="hero is-fullheight-with-navbar">
                <CovidHero/>
            </section>
            <section className="hero is-fullheight-with-navbar">
                <CovidInfomatics/>
            </section>
            <CovidFeatures/>
            <CovidPrecautions />
        </div>;
    }

}

export default CovidAndroid
