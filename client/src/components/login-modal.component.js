import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export default class Login extends Component {

    render() {
        return(
            <>
            <span className="link" variant="primary" onClick={this.props.setModalShow}>
                Log In
                </span>
            <Modal 
                show={this.props.modalShow} 
                onHide={this.props.setModalShow}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                animation={false}
                centered 
            >
                <Modal.Header closeButton >
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>Log in or create an account to access more information. 
                    If you create an account, it will need to be approved by site 
                    administrators before you can access the rest of the site.</Modal.Body>
                <div>
                <Form>
                    <Form.Group controlId="formBasicEmail" style={{margin:15}} >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={{margin:15}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Form>
                </div>
                
                <Modal.Footer >
                    <Button variant="secondary" onClick={this.props.setModalShow} >
                        Close
                    </Button>
                    <Button variant="secondary" onClick={this.props.setModalShow} >
                        Create Account
                    </Button>
                    <Button variant="secondary" onClick={this.props.setModalShow} >
                        Forgot Password
                    </Button>
                    <Button variant="primary" onClick={this.props.logIn} >
                        Log In
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }

} 