import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import Login from './login-modal.component';

export default class Footer extends Component {
    render() {
        return(
            <div>
                <hr />
                <Nav className="justify-content-center" >
                    <Nav.Item>
                        <Nav.Link className="footer-text" href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="footer-text" href="/news">News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="footer-text" href="/resources">Resources</Nav.Link>
                    </Nav.Item>
                       
                    <Nav.Item>
                        <Nav.Link className="footer-text">
                        <Login 
                            modalShow={this.props.modalShow}
                            loggedIn={this.props.loggedIn}
                            //methods
                            setModalShow={this.props.setModalShow}
                            logIn={this.props.logIn}
                            logOut={this.props.logOut}
                           />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                
            </div>
        )
    }
}