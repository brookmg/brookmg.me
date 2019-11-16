import React, {Component} from 'react'
import icon from '../img/icon.jpg'
import App from '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faHamburger } from '@fortawesome/free-solid-svg-icons'
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
import Blog from "./Blog";

class Header extends Component {

    runToSetup() {
        let burger = document.querySelector('.burger');
        let nav = document.querySelector('#' + burger.dataset.target);

        burger.addEventListener('click', function(){
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });

    };

    componentDidMount() {
        this.runToSetup()
    }

    render() {
        return (
            <Router>
              <div className="hero-head">

                  <nav className="navbar" role="navigation" aria-label="main navigation">
                      <div className="container">

                          <div id="navbar-brand" className="navbar-brand" role="navigation">
                              <img src={icon} alt="Logo" width="12%"
                                   style={{paddingBottom: `5px`, paddingTop: `5px`, minWidth: `50px`}}/>
                              <span className="navbar-burger burger" data-target="navbarMenu" style={{textAlign: `center`}}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </span>
                          </div>

                          <div id="navbarMenu" className="navbar-menu" >
                              <div id="navbar-end" className="navbar-end" >
                                  <Link to="/" className="navbar-item"> Home </Link>
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
                    <Blog />
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