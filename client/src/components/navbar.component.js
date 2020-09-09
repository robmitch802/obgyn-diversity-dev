import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

    render(){
        return (
            <Container>
            <Navbar fixed="top" bg="dark" variant="dark" expand="md" collapseOnSelect="true" >
                <Navbar.Brand>
                    <Link to="/">
                        <img alt="diversity committee logo" 
                        src="../../logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>
                        &nbsp;
                        <span className="d-sm-none">OB/GYN Diversity</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto body-text body-text-20" >
                       <Nav.Link className="body-text-20" href="/">Home</Nav.Link> 
                       <Nav.Link className="body-text-20" href="/news">News</Nav.Link> 
                       <Nav.Link className="body-text-20" href="/resources">Resources</Nav.Link> 
                       <Nav.Link className="body-text-20" href="/meetings">Meetings</Nav.Link> 
                       <Nav.Link className="body-text-20" href="/inequity">Inequity Inbox</Nav.Link> 
                       <Nav.Link className="body-text-20" href="/admin">Admin</Nav.Link> 
                       <Nav.Link className="body-text-20" href="/login">Log In</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        )
    }
}