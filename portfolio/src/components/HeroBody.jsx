import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class HeroBody extends Component {

    render() {
        return (
            <div className="hero-body is-bold">

                <div className="container introduction level">
                    <div className="has-text-left is-pulled-left" style={{ width: '50%'}}>
                        <h1 className="has-text-black is-size-3">Hello, </h1>
                        <h1 className="has-text-white is-size-1">
                            <span style={{backgroundColor: `#0bA292`, align: `center`, padding: `8px`}}> Brook </span>
                        </h1>
                        <h1 className="has-text-black is-size-3">Here</h1>

                        <div className="social">

                            <span style={{fontSize: `1.75rem`, padding: `1%`}}>
                              <a href="https://play.google.com/store/apps/dev?id=8458169143809274686">
                                  <FontAwesomeIcon icon={faGooglePlay} />
                              </a>
                            </span>

                            <span style={{fontSize: `1.75rem`, padding: `1%`}}>
                              <a href="https://github.com/brookmg"><FontAwesomeIcon icon={faGithub} /></a>
                            </span>

                            <span style={{fontSize: `1.75rem`, padding: `1%`}}>
                              <a href="https://twitter.com/brookmezgebu"><FontAwesomeIcon icon={faTwitter} /></a>
                            </span>

                            <span style={{fontSize: `1.75rem`, padding: `1%`}}>
                              <a href="https://www.linkedin.com/in/brook-mezgebu-b052a6121/"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </span>

                        </div>

                    </div>
                </div>

            </div>
        );
    }

}

export default HeroBody;