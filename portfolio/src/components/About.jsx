import React, {Component} from 'react'

class About extends Component {

    render() {
        return (
            <section className="hero">
                <div className="hero-body section about has-text-left"
                     style={{backgroundColor: `#0bA292`, color: `white`}}>
                    <div className="container">
                        <h1 className="has-text-white is-bold is-size-4"><b>About</b></h1>
                        <p className="has-text-white">My name is <b>Brook Mezgebu</b> and I develop Android mobile
                            applications on my spare time. My main drive is to create simple , elegant and useable
                            applications for my users which usually tends to be from under-represented communities. I
                            live in a place called Ethiopia around the horn of Africa.</p>
                        <p className="has-text-white">I am currently learning Software Enginnering in <i> AASTU </i>.
                            Also working as an Android Developer for varies independent companies. </p>
                    </div>
                </div>
            </section>
        );
    }

}

export default About;