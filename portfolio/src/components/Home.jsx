import React, {Component} from 'react'
import '../css/bulma.css'
import HeroBody from './HeroBody.jsx'
import '../App.css';
import About from "./About";
import Projects from "./Projects.jsx"

class Home extends Component {

    render() {
        return (
            <div>
                <section className="hero is-fullheight-with-navbar">
                    <HeroBody/>
                </section>
                <About/>
                <Projects/>
            </div>
        );
    }

}

export default Home;