// File: src/App.jsx

import React, { useState } from 'react';
import './App.css';
import backgroundImage from './assets/me.JPG';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <div
            className="home"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Adithya 👋 — a passionate developer!</p>
          </div>
        );
      case 'projects':
        return (
          <section className="projects">
            <h2>My Projects</h2>
            <div className="card-container">
              <div className="card">React Weather App</div>
              <div className="card">Portfolio Website</div>
              <div className="card">To-Do App</div>
            </div>
          </section>
        );
      case 'services':
        return (
          <section className="services">
            <h2>My Services</h2>
            <div className="card-container">
              <div className="card">Web Development</div>
              <div className="card">App Development</div>
              <div className="card">UI/UX Design</div>
              <div className="card">SEO Optimization</div>
              <div className="card">DevOps</div>
              <div className="card">Technical Writing</div>
            </div>
          </section>
        );
      case 'about':
        return (
          <section className="about">
            <h2>About Me</h2>
            <p>
              I'm Adithya, a full-stack developer with expertise in React, Node.js, and
              Python. I love building scalable web applications and working on
              open-source projects.
            </p>
          </section>
        );
      case 'contact':
        return (
          <section className="contact">
            <h2>Contact Me</h2>
            <p>Email: adithya@example.com</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/adithya" target="_blank" rel="noreferrer">linkedin.com/in/adithya</a></p>
            <p>Phone: +91 12345 67890</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1 onClick={() => setActivePage('home')}>Adithya's Portfolio</h1>
        <ul>
          <li onClick={() => setActivePage('home')}>Home</li>
          <li onClick={() => setActivePage('projects')}>Projects</li>
          <li onClick={() => setActivePage('services')}>Services</li>
          <li onClick={() => setActivePage('about')}>About</li>
          <li onClick={() => setActivePage('contact')}>Contact</li>
        </ul>
      </nav>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
