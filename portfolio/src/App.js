import React from 'react';
import './css/bulma.css'
import './css/fontawesome.css'
import './css/fontawesome-all.css'
import Header from './components/Header.jsx'
import HeroBody from './components/HeroBody.jsx'
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects.jsx"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <section className="hero is-fullheight">
          <Header/>
          <HeroBody/>
        </section>

        <About/>

        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
