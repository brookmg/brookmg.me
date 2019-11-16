import React, {Component} from 'react'

class Error404 extends Component {

    render() {
        return (
            <section className="hero is-fullheight-with-navbar">
                <div className="hero-body container" style={{ width: `100%` }}>
                    <h1 className="has-text-white is-size-1">
                        <span style={{backgroundColor: `#0bA292`, align: `center`, padding: `8px`}}> 404 </span>
                    </h1>

                    <h3 style={{ padding: `2%` }} >
                        This page doesn't exist here.
                    </h3>
                </div>
            </section>
        );
    }

}

export default Error404;