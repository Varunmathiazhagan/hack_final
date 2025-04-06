import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import ProblemStatementCards from './components/ProblemStatementCards';
import Footer from './components/Footer';
import './App.css';
import './components/animations.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="app-container">
              <Home />
              <ProblemStatementCards />
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
