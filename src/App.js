// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Krishna from './webpages/Krishna.js';
import Sanjit from './webpages/Sanjit.js';
import Navbar from './elements/Navbar'; // Import the Navbar


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for the "Hi" page */}
        <Route path="/krishna" element={<Krishna />} />

        {/* Route for the "Hello" page */}
        <Route path="/sanjit" element={<Sanjit />} />
      </Routes>
    </Router>
  );
}

export default App;
