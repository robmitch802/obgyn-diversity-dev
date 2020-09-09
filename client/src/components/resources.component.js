import React, { Component } from 'react';

export default class Resources extends Component {

    render() {
        return(
            <div>
                <br />
                <p className="text-danger">This page will be login protected</p>
                <br />
                <h3 className="hed-text">Strategic Plan</h3>
                <h5 className="hed-text">Mission Statement</h5>
                <p className="body-text-20">The mission of the OB/Gyn Department diversity
                    committee is to make real the promise of inclusive excellence by embracing
                    our differences and promoting equitable treatment of all.</p>
                <br/>
                <h5 className="hed-text">Priority Areas &amp; Broad Goals:</h5>
                <p className="body-text-20">Based on meetings in January/February 2020 to discuss priorities for the committee and
broad goals for the department, the committee identified four broad areas where we
would like to focus over the next three years.</p>
                <p className="body-text-20">In addition, we want to ensure that all efforts reach a wide variety of department members and role groups.
                We will provide at least twice yearly updates on committee progress across the department, sites, job categories, and will solicit
                membership and input at the same time.</p>
                <p className="body-text-20"><a href="../../OBGYN-Diversity-Strategic-Plan.docx" alt="Strategic Plan" >Full Strategic Plan Document</a></p>
                <p className="body-text-20"></p>
                <h4 className="hed-text">Resources List</h4>
                <ul className="list-unstyled">
                    <li className="media" >
                        <div className="media-body">
                            <div>
                            <h5 className="mt-0 mb-1 hed-text" ><a href="/">Diversity in OBGYN</a></h5>
                            <span className="body-text">List of resources on increasing diversity in our profession.</span>
                            </div>
                        </div>
                    </li>
                    <hr/>
                    <li className="media" >
                        <div className="media-body">
                            <div>
                            <h5 className="mt-0 mb-1 hed-text" ><a href="/">Approaching Diversity</a></h5>
                            <span className="body-text">Perspectives on how to approach diversity issues in the workplace.</span>
                            </div>
                        </div>
                        
                    </li>
                    <hr/>
                    <li className="media" >
                        <div className="media-body">
                            <div>
                            <h5 className="mt-0 mb-1 hed-text" ><a href="https://www.massgeneral.org/careers/commitment-to-diversity/">MGH Commitment to Diversity</a></h5>
                            <span className="body-text">Mass General statement on equal access to all.</span>
                            </div>
                        </div>
                    </li>
                    <hr/>
                    <li className="media" >
                        <div className="media-body">
                            <div>
                            <h5 className="mt-0 mb-1" ><a href="https://www.massgeneral.org/about/diversity-inclusion">MGH Diversity Statement</a></h5>
                            <span className="body-text">Mass General policies on diversity and inclusion.</span>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        )
    }
}