import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated to use 'Routes'
import App from './App';
import Popular from './pages/Popular';

/*import Classical from './pages/Classical';
import Folk from './pages/Folk';
import Devotional from './pages/Devotional';
import Traditional from './pages/Traditional';
import Contemporary from './pages/Contemporary';
import Regional from './pages/Regional';
import Historical from './pages/Historical';
<Route path="/classical/hindustani" element={<Classical />} /> 
<Route path="/classical/carnatic" element={<Classical />} /> 
<Route path="/folk" element={<Folk />} />
<Route path="/devotional" element={<Devotional />} />

      <Route path="/traditional" element={<Traditional />} />
      <Route path="/contemporary" element={<Contemporary />} />
      <Route path="/regional/category1" element={<Regional />} /> 
      <Route path="/regional/category2" element={<Regional />} /> 
      <Route path="/regional/explore-more" element={<Regional />} /> 
      <Route path="/historical" element={<Historical />} />
*/


ReactDOM.render(
  <Router>
    <Routes> {/* Updated to use 'Routes' */}
      <Route path="/" element={<App />} />
      <Route path="/popular" element={<Popular />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
