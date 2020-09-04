import React from 'react';
import logo from './images/capture.jpeg';
// import backgroundImage from "./images/background.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nilakshi Das
        </p>
        <section>

       
        
        <a
        href="https://www.linkedin.com/in/nilakhi-das-0b1a961b4/"
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>

      <a
        href="https://www.instagram.com/nilakshi_.6/"
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
      <i class="fab fa-instagram"></i>
      <span></span>
      </a>

        <a
        href="mailto:nilakshi2k@gmail.com"
        className="icon-button envelope"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope"></i>
        <span></span>
      </a>

      <a
        href="https://github.com/nilakshi6"
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github"></i>
        <span></span>
      </a>
        </section>
      </header>
    </div>
  );
}

export default App;
