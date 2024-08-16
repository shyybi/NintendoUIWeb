import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Help from './Pages/Help-me';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path='/help-me' element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;