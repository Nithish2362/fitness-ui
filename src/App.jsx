import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import FormPage from './FormPage';
import ProfilePage from './ProfilePage';
import './App.css'; // Add your global CSS here

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href="/form">
                <i className="fas fa-pencil-alt"></i> Form
              </a>
            </li>
            <li>
              <a href="/Diet">
                <i className="fas fa-user"></i> Diet
              </a>
            </li>
            <li>
              <a href="/Workout">
                <i className="fas fa-user"></i> Workout
              </a>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
