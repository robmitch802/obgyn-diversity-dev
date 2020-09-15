import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
import axios from 'axios';
//import { Link } from 'react-router-dom'


export default class CreateArticle extends Component {
    constructor(props){
        super(props);

        this.state={
            title:'',
            text:'',
            author: this.props.username,
            date: new Date(),
        }
    }


//----------------Admin page functions -----------------//
//event handler for form fields
handleChange = (event) => {
    let input = event.target.value
    this.setState({
      [event.target.name]: input
    })
}; 

//date field handler
onDateChange(date) {
    this.setState({
        date: date,
    })
};

//submit handler for article form submission
onSubmit(e) {
    e.preventDefault();
    const article = {
      title: this.state.title,
      text: this.state.text,
      author: this.state.author,
      date: this.state.date
    }
    console.log(article)
  
    axios.post('http://localhost:5000/articles/add/', article)
      .then(res => console.log(res.data));
  
    window.location = "/admin";
    
  };

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
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    {/* --------- Text --------------*/}
                    <div className="form-group" >
                        <span className="required"></span><label>Article Text:</label>
                        <textarea
                            rows="10"
                            required
                            className="form-control"
                            name="text"
                            value={this.state.text}
                            onChange={this.handleChange}
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
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    {/* --------- Title --------------*/}
                    <div className="form-group" >
                        <span className="required"></span><label>Publish Date:</label>
                        <div>
                            <DatePicker 
                                name="date"
                                selected={this.state.date}
                                onChange={this.onDateChange}
                            />
                        </div>
                    </div>
                    <div className="form-group" >
                        <input type="submit" value="Publish Article" className="btn btn-primary" />
                    </div>
                </Form>
            </div>
        )
    }
}