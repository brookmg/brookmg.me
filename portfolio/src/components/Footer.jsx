import React, {Component} from 'react'

class Footer extends Component {

    render() {
        return (
            <div className="hero">
                <footer>
                    <hr/>
                    <div className="ending has-text-centered is-fluid" style={{paddingBottom: `32px`, color: `black`}}>
                        <h1 className="has-text-black">Copyright © 2019 Brook Mezgebu</h1>
                        <h1 className="has-text-black">Powered by <a href="https://bulma.io/">Bulma</a> and <a
                            href="https://reactjs.org/">React JS</a></h1>
                        <h1 className="has-text-black">Hosted on <a href="https://github.com/">GitHub</a></h1>
                    </div>
                </footer>
            </div>
        );
    }

}

export default Footer;