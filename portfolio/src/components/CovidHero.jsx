import React, {Component} from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CovidHero extends Component {

    render() {
        return (
            <div className="hero-body is-bold" style={{ backgroundColor: '#6200EE'}}>

                <div className="container introduction level">
                    <div className="has-text-left is-pulled-left" style={{ width: '100%', color: 'white'}}>
                        <h1 style={{ fontWeight: 700, fontSize: '3em', fontStyle: 'bold' }}> Covid Android App </h1>
                        <h5> We have made an android app to help in the process of eliminating the dangers posed by the new deadly corona virus.
                            It contains upto date statistics about the distribution of the virus in Ethiopia and around the world. It also has a questionnaire
                            to collect information from people and identify areas with high risk of spread.
                        </h5>

                        <a className="button has-text-white is-center" href="https://appdistribution.firebase.dev/i/HuvZrBbp" style={{ marginTop: '5%', marginRight: '3%', backgroundColor: '#3700B3' }}>
                            <FontAwesomeIcon icon={faDownload} style={{ margin: '15px' }} /> <p style={{ margin: '15px' }}> Download </p> </a>
                        <a className="button has-text-white is-center " href="https://github.com/brookmg/covidandroid" style={{ marginTop: '5%', backgroundColor: '#292320' }}>
                            <FontAwesomeIcon icon={faGithub} style={{ margin: '15px' }} /> <p style={{ margin: '15px' }}> Source Code </p> </a>
                    </div>

                    <div className=" is-fullheight is-block is-pulled-right" style={{ width: '40%' , height: '100%'}}>
                        <img src="covid_virus_icon.svg"
                             alt="Covid Icon"
                             className="is-hidden-mobile"
                             style={{ filter: 'hue-rotate(280deg)', width: '60%', height: '80%' }}
                        />
                    </div>
                </div>

            </div>
        );
    }

}

export default CovidHero;
