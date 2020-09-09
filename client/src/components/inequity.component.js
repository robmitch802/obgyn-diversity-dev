import React, { Component } from 'react';

export default class Inequity extends Component {

    render() {
        return(
            <div>
                <br />
                <h2 className="hed-text">Inequity Inbox</h2>
                <p className="text-danger">This page will be login protected</p>
                <p className="body-text-20 text-center">Click below or use the QR code to access the inequity inbox reporting system for the OB/GYN department.</p>
                <div>
                    <img className="mx-auto d-block img-fluid" src="../../equity.jpg" alt="reporting icon" />
                </div>
                <div className="text-center body-text-20"><a href="https://redcap.partners.org/redcap/surveys" alt="">https://redcap.partners.org/redcap/surveys</a></div>
                <div className="text-center" ><span className="strong">Access code:</span> PXMOMF97X</div>
            </div>
        )
    }
}