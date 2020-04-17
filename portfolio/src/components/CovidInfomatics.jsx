import React, {Component} from 'react'

class CovidInfomatics extends Component {

    render() {
        return (
            <div className="hero-body is-bold" style={{ backgroundColor: '#f3f4f5'}}>
                <div className="container introduction level">
                    <img
                        src="info_covid19.svg"
                        alt="infomatics"
                        className="is-block-mobile is-centered"
                        style={{ width: '100%', height: 'auto', padding: '5%' }} />

                    <div className="has-text-left is-pulled-right" style={{ width: '100%', padding: '5%', color: 'black'}}>
                        <h1 style={{ fontWeight: 700, fontSize: '3em', fontStyle: 'bold' }}> What is COVID-19? </h1>
                        <h5>
                            COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.
                        </h5>

                        <a className="button has-text-white is-center" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" style={{ marginTop: '5%', backgroundColor: '#3700B3' }}> Read More </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default CovidInfomatics;
