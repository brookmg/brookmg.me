import React from 'react';
import './css/bulma.css'
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1');
}

function App() {
  initializeReactGA()

  return (
    <div className="App">
        <Header/>
        <Footer/>
    </div>
  );
}

export default App;
