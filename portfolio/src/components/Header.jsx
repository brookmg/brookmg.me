import React, {Component} from 'react'
import icon from '../img/icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import '../css/bulma.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom";
import Home from './Home.jsx'
import Error404 from "./Error404";
import Blog from "./Blog";
import Post from "./Post";
import CovidAndroid from "./CovidAndroid";
import ReactGA from 'react-ga'

const SwitchHolder = () => {
    const history = useHistory();
  
    React.useEffect(() => {
      trackPageView(); // To track the first pageview upon load
      history.listen(trackPageView); // To track the subsequent pageviews
    }, [history]);
  
    function trackPageView() {
      ReactGA.set({ page: window.location.pathname + window.location.search }); // Update the user's current page
      ReactGA.pageview(window.location.pathname + window.location.search); // Record a pageview for the given page
    }

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route exact path="/covidandroid">
                <CovidAndroid />
            </Route>
            <Route exact path="/post/:postId" component={Post} />
            <Route path="*">
                <Error404 />
            </Route>
        </Switch>
    )
  };

class Header extends Component {

    trackPageView() {
      ReactGA.set({ page: window.location.pathname + window.location.search }); // Update the user's current page
      ReactGA.pageview(window.location.pathname + window.location.search); // Record a pageview for the given page
    }

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
                              <img src={icon} alt="Logo" width="80px"
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
                                  {/* <Link to="/covidandroid" className="navbar-item"> CovidAndroid </Link> */}

                                  <span className="navbar-item">
                                    <button className="button is-warning" style={{backgroundColor: `#0bA292`, color: `white`}}>
                                        <Link to="./file.pdf" target="_blank"
                                              onClick={ 
                                                  ReactGA.event({
                                                      category: 'Interaction',
                                                      action: 'Open resume'
                                                  })
                                              }
                                              download style={{backgroundColor: `#0bA292`, color: `white`}}>
                                          <span className="icon"><FontAwesomeIcon icon={faFilePdf} /></span>
                                          <span> Download Resume </span>
                                        </Link>
                                    </button>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </nav>
              </div>

            <SwitchHolder />
            </Router>
        );
    }

}

export default Header;
