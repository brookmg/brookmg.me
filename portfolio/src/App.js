import React from 'react';
import './css/bulma.css'
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-177294412-1')

function App() {
  return (
    <div className="App">
        <Header/>
        <Footer/>
    </div>
  );
}

export default App;
