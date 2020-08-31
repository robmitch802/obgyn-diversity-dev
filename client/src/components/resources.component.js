import React, { Component } from 'react';

export default class Resources extends Component {

    render() {
        return(
            <div>
                <br />
                <h2 className="hed-text">Resources List</h2>
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