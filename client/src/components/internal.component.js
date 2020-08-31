import React, { Component } from 'react';

export default class Internal extends Component {

    render() {
        return(
            <div>
                <br />
                <h2 className="hed-text">Internal Information Here</h2>
                <p className="text-danger">This page will be login protected</p>
                <div>
                    <img className="mx-auto d-block img-fluid" src="../../equity.jpg" alt="reporting icon" />
                </div>
                <h4 className="hed-text">Strategic Plan</h4>
                <h5 className="hed-text">Mission Statement</h5>
                <p className="body-text-20">The mission of the OB/Gyn Department diversity
                    committee is to make real the promise of inclusive excellence by embracing
                    our differences and promoting equitable treatment of all.</p>
                <br/>
                <h5 className="hed-text">Priority Areas & Broad Goals:</h5>
                <p className="body-text-20">Based on meetings in January/February 2020 to discuss priorities for the committee and
broad goals for the department, the committee identified four broad areas where we
would like to focus over the next three years.</p>
                <p className="body-text-20">In addition, we want to ensure that all efforts reach a wide variety of department members and role groups.
                We will provide at least twice yearly updates on committee progress across the department, sites, job categories, and will solicit
                membership and input at the same time.</p>
                <p className="body-text-20"><a href="../../OBGYN-Diversity-Strategic-Plan.docx" alt="Strategic Plan" >Full Strategic Plan Document</a></p>
                <p className="body-text-20"></p>
            </div>
        )
    }
}