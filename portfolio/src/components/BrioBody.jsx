import React, {Component} from 'react'
import Brio from '../img/Brio.png' 
import Img from 'react-cool-img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class BrioBody extends Component {

    render() {
        return (
            <div className="hero-body is-bold" style={{background: `linear-gradient(#517dbf,#5e92df)`, padding: '0' }}>
                <div className="container introduction level" style={{ padding: "0", marginRight: "10%", marginLeft: '10%' }}>
                    <div className="has-text-left is-pulled-left" style={{ width: '50%' }}>
                        <h1 className="has-text-white is-size-3">Brio, CBE Client App</h1>  
                        <p className="has-text-white">
                            Brio is a USSD automating app that makes it easy to send and track your money. You can manage your CBE Birr account without going through the process of waiting for USSD calls. Mobile banking has never been more easy. It has many features packed in such as:
                            <br />
                            <br />
                            <ul>
                                <li>* Sending money to other users</li>
                                <li>* Buying airtime</li>
                                <li>* Making payment to merchants</li>
                                <li>* Withdrawing money</li>
                                <li>* Tracking transactions</li>
                            </ul>
                        </p>
                        <br />

                        <a href='https://play.google.com/store/apps/details?id=com.burnous.brio&utm_source=brookmg&utm_campaign=portfolio_site&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' style={{
                            marginLeft: '-3%',
                        }}>
                            <img alt='Get Brio on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="50%"/>
                        </a>
                    </div>
                    <div className="has-text-right" style={{ width: '30%', padding: "0" }}>
                        <Img
                            className="screenshot"
                            
                            src={ Brio }
                            alt={`Preview for Brio`}
                            debounce={ 1000 }
                            lazy
                            />
                </div>
                </div> 
            </div>
        );
    }

}

export default BrioBody;