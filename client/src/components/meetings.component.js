import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class Meetings extends Component {

    render() {
        return(
            <div>
                <br />
                <h2 className="hed-text">Meetings</h2>
                <p className="text-danger">This page will be login protected</p>
                <Card className="text-center">
                    <Card.Header>Next Meeting: </Card.Header>
                    <Card.Body>
                        <Card.Title>Wednesday, October 22, 2020</Card.Title>
                        <Card.Text>
                            <span className="strong">Where:&nbsp;</span><span>MGH Board Room</span> <br />
                            <span className="strong">Time:&nbsp;</span><span>3:30 p.m.</span> <br />
                            <Button varant="primary" href="/">Zoom Meeting Link</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <ul className="list-unstyled">
                    <li className="body-text"><a href="/">Minutes from Meeting of Aug. 13, 2020</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of July 15, 2020</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of June 10, 2020</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of May 7, 2020</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of April 17, 2020</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of March 22, 2020</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of Feb. 5, 2020</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of Jan. 6, 2020</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of Dec. 13, 2019</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of Nov. 11, 2019</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of Oct. 22, 2019</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of Sept. 13, 2019</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of Aug. 15, 2019</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of July 2, 2019</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>
                    <li className="body-text"><a href="/">Minutes from Meeting of June 16, 2019</a>&nbsp;<span className="small">Posted Aug. 18, 2020</span></li>

                </ul>
            </div>
        )
    }
}