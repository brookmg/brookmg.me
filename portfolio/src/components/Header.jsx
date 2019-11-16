import React, {Component} from 'react'
import icon from '../img/icon.jpg'
import App from '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import '../css/bulma.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";
import Home from './Home.jsx'
import Error404 from "./Error404";

class Header extends Component {

    render() {
        return (
            <Router>
              <div className="hero-head">
                  <nav className="navbar">
                      <div className="container">
                          <div className="navbar-brand">
                              <img src={icon} alt="Logo" width="12%"
                                   style={{paddingBottom: `5px`, paddingTop: `5px`, minWidth: `50px`}}/>
                              <span className="navbar-burger burger" data-target="navbarMenuHeroB"/>
                          </div>

                          <div id="navbarMenuHeroB" className="navbar-menu">
                              <div className="navbar-end">
                                  <Link to="/" className="navbar-item is-active"> Home </Link>
                                  <Link to="/blog" className="navbar-item"> Blog </Link>

                                  <span className="navbar-item">
                                    <a className="button is-warning" style={{backgroundColor: `#0bA292`, color: `white`}}>
                                        <Link to="./file.pdf" target="_blank"
                                              download style={{backgroundColor: `#0bA292`, color: `white`}}>
                                          <span className="icon"><FontAwesomeIcon icon={faFilePdf} /></span>
                                          <span> Download Resume </span>
                                        </Link>
                                    </a>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </nav>
              </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/blog">

                </Route>


                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
            </Router>
        );
    }

}

export default Header;