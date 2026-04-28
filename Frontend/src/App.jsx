import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost.jsx';
import Feed from './pages/feed.jsx';
import Contact from './pages/ContactUs.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
