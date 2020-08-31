import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

//const homeuri = process.env.HOME_URI;

export default class About extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col> 
                    <h2 className="hed-text text-center">OBGYN Diversity Committee</h2>
                    <img className="mx-auto d-block img-fluid" src="../../diversity.jpg" alt="diverse hands" />
                    <br />
                    <hr />
                    </Col>
                </Row>
                <Row>
                <blockquote className="blockquote body-text text-center">
                    <p className="mb-0">"<strong>Treating different things</strong> the same can generate as much inequality as treating the same things differently."
                    </p>
                    <footer className="blockquote-footer">Kimberle Crenshaw</footer>
                </blockquote>
                </Row>
                <Row>
                    <h3 className="hed-text">OB/GYN Diversity & Equity Committe Mission Statement</h3>
                    <p className="body-text">The mission of the OB/Gyn Department diversity committee is to make real the promise of inclusive excellence by embracing our differences and promoting equitable treatment of all.</p>
                </Row>
                <Row>
                    <h3 className="hed-text">OBGYN Diversity Committee Goals</h3>
                    <p className="body-text" >Diversity is the richness of human differences. Inclusion is when everyone feels connected, valued and engaged. 
                    At Massachusetts General Hospital, we believe that because of diversity we excel; through inclusion we respect; focused on equity we serve, heal, educate and innovate.</p>
                    <p className="body-text" >Our trials and triumphs became at once unique and universal, black and more than black; in chronicling our journey, 
                    the stories and songs gave us a means to reclaim memories that we didn't need to feel shame about...memories that all people might study 
                    and cherish - and with which we could start to rebuild." That is why we are forging service projects in America that 
                    bring together Christians, Muslims, and Jews. There need not be contradiction between development and tradition</p>
                    <p className="body-text" >Diversity is the richness of human differences. Inclusion is when everyone feels connected, valued and engaged. 
                    At Massachusetts General Hospital, we believe that because of diversity we excel; through inclusion we respect; focused on equity we serve, heal, educate and innovate.</p>
                </Row>
            </Container>
            </div>
        )
    }
}