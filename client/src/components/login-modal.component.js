import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export default class Login extends Component {
    constructor(props) {
        super(props) 

        const [ show, setShow ] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    }

    render() {
        return(
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>Log in or create an account to access more information.</Modal.Body>
                <Form>
                    <Form.Group controlId="formEmail" >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Form>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    <Button variant="secondary" onClick={handleClose} >
                        Create Account
                    </Button>
                    <Button variant="secondary" onClick={handleClose} >
                        Forgot Password
                    </Button>
                    <Button variant="primary" onClick={handleClose} >
                        Log In
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }

} 