import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Home from './views/pages/Home';
import PageNotFound from './views/pages/PageNotFound';

//import Index from "./views/Index.js";
import RegisterPage from "./views/pages/RegisterPage.js";
import ProfilePage from "./views/pages/ProfilePage.js";

function RouteLoader() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    );
  }

export default RouteLoader;