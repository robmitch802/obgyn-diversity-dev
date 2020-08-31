import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

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
                        <Nav.Link className="footer-text" href="/login">Log In</Nav.Link>
                    </Nav.Item>
                </Nav>
                
            </div>
        )
    }
}