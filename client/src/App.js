import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar.component';
import About from './components/about.component';
import Admin from './components/admin.component';
import Footer from './components/footer.component';
import Internal from './components/internal.component';
import Minutes from './components/minutes.component';
import News from './components/news.component';
import Resources from './components/resources.component';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
          <br />
          <Route path="/" exact component={About} />
          <Route path="/news" component={News} />
          <Route path="/minutes" component={Minutes} />
          <Route path="/admin" component={Admin} />
          <Route path="/internal" component={Internal} />
          <Route path="/resources" component={Resources} />
        <Footer />
      </div>
    </Router>    
  );
}

export default App;
