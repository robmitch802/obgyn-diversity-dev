import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar.component';
import About from './components/about.component';
import Admin from './components/admin.component';
import Footer from './components/footer.component';
import Inequity from './components/inequity.component';
import Meetings from './components/meetings.component';
import News from './components/news.component';
import Resources from './components/resources.component';
import SignUpPage from './components/signup.component';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';

//App class begins
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      logoutOff: true,
      modalShow: false,
    }
  };

//-----------------Log in functions---------------------//
setModalShow = () => {
  this.state.modalShow ?
    this.setState({
      modalShow: false
    }) : 
    this.setState({
      modalShow: true
    })
};

logIn = (event) => {
  event.preventDefault();
  this.setState({
    email: '',
    password: '',
    loggedIn: true,
    modalShow: false
  })
}


logOut = (event) => {
    event.preventDefault();
    this.setState({
      loggedIn: false,
      modalShow: false,
      display: ''
    }) 
}

render() {
  return (
    <Router>
      <div className="container">
        <NavBar
          email={this.state.email}
          password={this.state.password}
          display={this.state.display}
          displayColor={this.state.displayColor}
          loggedIn={this.state.loggedIn}
          modalShow={this.state.modalShow}
          //methods
          setModalShow={this.setModalShow}
          logIn={this.logIn}
          logOut={this.logOut}
          />
          <br />
          <Route path="/" exact component={About} />
          <Route path="/news" component={News} />
          <Route path="/meetings">
            <Meetings loggedIn={this.state.loggedIn} />
          </Route>
          <Route path="/admin" > 
            <Admin loggedIn={this.state.loggedIn} />
          </Route>
          <Route path="/inequity">
            <Inequity loggedIn={this.state.loggedIn} />
          </Route>
          <Route path="/resources">
            <Resources loggedIn={this.state.loggedIn} />  
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        <Footer 
                loggedIn={this.state.loggedIn}
                modalShow={this.state.modalShow}
                //methods
                setModalShow={this.setModalShow}
                logIn={this.logIn}
                logOut={this.logOut}/>
      </div>
    </Router>    
  );
}
}
