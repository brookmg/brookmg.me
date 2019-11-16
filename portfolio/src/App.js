import React from 'react';
import './css/bulma.css'
import './css/fontawesome.css'
import './css/fontawesome-all.css'
import Header from './components/Header.jsx'
import HeroBody from './components/HeroBody.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
        <section className="hero is-fullheight">
          <Header/>
          <HeroBody/>
        </section>

    </div>
  );
}

export default App;
