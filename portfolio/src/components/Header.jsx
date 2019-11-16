import React, {Component} from 'react'
import icon from '../img/icon.jpg'
import '../css/bulma.css'

class Header extends Component {

    render() {
        return (
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
                              <a className="navbar-item is-active">
                                  Home
                              </a>
                              <a className="navbar-item">
                                  Blog
                              </a>
                              <span className="navbar-item">
                                <a className="button is-warning" style={{backgroundColor: `#0bA292`, color: `white`}}>
                                  <span className="icon">
                                    <i className="fab fa-file-pdf"/>
                                  </span>
                                  <span>Download Resume</span>
                                </a>
                              </span>
                          </div>
                      </div>
                  </div>
              </nav>
          </div>
        );
    }

}

export default Header;