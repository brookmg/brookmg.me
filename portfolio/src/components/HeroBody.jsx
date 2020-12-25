import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Img from 'react-cool-img'
import VCIllustration from "../img/vc_illustration.svg"

class HeroBody extends Component {

    render() {
        return (
            <div className="hero-body is-bold">

                <div className="container introduction level">
                    <div className="has-text-left is-pulled-left" style={{ width: '30%', flexDirection: 'column', display: 'flex' }}>
                        
                        <h1 className="has-text-white is-size-1">
                            <span style={{backgroundColor: `#0bA292`, align: `center`, padding: `8px`}}><h1 className="has-text-black is-size-1">Hello, </h1> <span style={{ fontWeight: 900 }}> Brook </span> <h1 className="has-text-black is-size-1">Here</h1> </span>
                        </h1>
                        
                        <div className="social">

                            <span style={{fontSize: `1.75rem`, padding: `1%`}}>
                                <a href="https://play.google.com/store/apps/dev?id=8458169143809274686" target="blank">
                                    <FontAwesomeIcon icon={faGooglePlay} />
                                </a>
                            </span>

                            <span style={{fontSize: `1.75rem`, padding: `1%`}}>
                                <a href="https://github.com/brookmg" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
                            </span>

                            <span style={{fontSize: `1.75rem`, padding: `1%`}}>
                                <a href="https://twitter.com/brook_mezgebu" target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
                            </span>

                            <span style={{fontSize: `1.75rem`, padding: `1%`}}>
                                <a href="https://www.linkedin.com/in/brook-mezgebu/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </span>
                        </div>
                    </div>

                    <Img
                            style={{ flex: 'auto' }}
                            src={ VCIllustration }
                            alt={`Illustration of moi?`}
                            debounce={ 1000 }
                            lazy
                        />

                </div>



            </div>
        );
    }

}

export default HeroBody;