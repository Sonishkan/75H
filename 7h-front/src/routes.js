import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function RouteLoader() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  }

export default RouteLoader;