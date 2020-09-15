import React, { Component } from 'react';
import { Form, Col, Row, Container, ListGroup } from 'react-bootstrap'
import CreateArticle from './admin-create-article.component'
//import axios from 'axios';


export default class Admin extends Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            text:'',
            date: new Date(),
            author: '',
        }
    }
    render(){
        return(
            this.props.loggedIn ? 
            <div>
            <Container>
            <h2>Admin Page</h2>
            <p className="text-danger">This page will be login protected</p>
            <Row>
                <Col lg={3} >
                    <ListGroup>
                        <ListGroup.Item><CreateArticle />New Article</ListGroup.Item>
                        <ListGroup.Item>Edit Article</ListGroup.Item>
                        <ListGroup.Item>Post Minutes</ListGroup.Item>
                        <ListGroup.Item>Post Resource</ListGroup.Item>
                    </ListGroup>
                </Col>
            <Col>
            <div className="form">
                <Form >
                    <h3 className="title" >Article Composer</h3>
                    {/* --------- Title --------------*/}
                    <div className="form-group" >
                        <span className="required"></span><label>Title:</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            name="title"
                        />
                    </div>
                    {/* --------- Text--------------*/}
                    <div className="form-group" >
                        <span className="required"></span><label>Article Text:</label>
                        <textarea
                            rows="10"
                            required
                            className="form-control"
                            name="text"
                        />
                    </div>
                    {/* --------- Title --------------*/}
                    <div className="form-group" >
                        <span className="required"></span><label>Author:</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            name="author"
                        />
                    </div>
                    {/*-----------------Submit ------------------- */}

                <button type="submit" value="Publish" className="btn btn-primary align-right" >Publish</button>
                </Form>
            </div>
            </Col>
            </Row>
            </Container>
            </div>
            :
            <div id="login-message body-text-20"> Log in to see this page</div>
        )
    }
}