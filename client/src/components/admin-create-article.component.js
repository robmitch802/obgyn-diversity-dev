import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
//import axios from 'axios';
//import { Link } from 'react-router-dom'


export default class CreateArticle extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
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
                    {/* --------- Title --------------*/}
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
                    {/* --------- Title --------------*/}
                    <div className="form-group" >
                        <span className="required"></span><label>Date:</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            name="date"
                        />
                    </div>
                </Form>
            </div>
        )
    }
}