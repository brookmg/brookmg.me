import React, {Component} from 'react'
import '../css/bulma.css'
import HeroBody from './HeroBody.jsx'
import '../App.css';
import About from "./About";
import Projects from "./Projects.jsx"
import BrioBody from './BrioBody';

class Home extends Component {

    render() {
        return (
            <div>
                <section className="hero is-fullheight-with-navbar">
                    <HeroBody/>
                </section>
                <About/>
                <BrioBody />
                <Projects/>
            </div>
        );
    }

}

export default Home;