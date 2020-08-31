import React, { Component } from 'react';
//import axios from 'axios';

export default class News extends Component {
    render() {
        return(
            <div>
                <br />
                <h2 className="hed-text">News</h2>
                <ul className="list-unstyled">
                    <li className="media" >
                        <div className="media-body">
                            <div>
                                <span className="small text-uppercase txt-blue">News</span> &nbsp; &bull; &nbsp;
                                <span className="small text-uppercase txt-black">Aug. 11, 2020</span>
                                </div>
                            <h5 className="mt-0 mb-1 hed-text" ><a href="/news">Family Planning During COVID-19</a></h5>
                            <span className="body-text-20">Choosing to build or grow a family can be a complex decision for many people, 
                            and this decision has only been further complicated by the COVID-19 pandemic.</span>
                        </div>
                    </li>
                    <hr/>
                    <li className="media" >
                        <div className="media-body">
                            <div>
                                <span className="small text-uppercase txt-blue">News</span> &nbsp; &bull; &nbsp;
                                <span className="small text-uppercase txt-black">Aug. 11, 2020</span>
                                </div>
                            <h5 className="mt-0 mb-1 hed-text" ><a href="/news">Family Planning During COVID-19</a></h5>
                            <span className="body-text-20">Choosing to build or grow a family can be a complex decision for many people, 
                            and this decision has only been further complicated by the COVID-19 pandemic.</span>
                        </div>
                    </li>
                    <hr />
                    <li className="media shadow" >
                        <div className="media-body">
                            <div>
                                <span className="small text-uppercase txt-blue">News</span> &nbsp; &bull; &nbsp;
                                <span className="small text-uppercase txt-black">Aug. 11, 2020</span>
                                </div>
                            <h5 className="mt-0 mb-1 hed-text" ><a href="/news">Family Planning During COVID-19</a></h5>
                            <span className="body-text-20">Choosing to build or grow a family can be a complex decision for many people, 
                            and this decision has only been further complicated by the COVID-19 pandemic.</span>
                            <br/>
                            <span className="text-danger">This news item has a shadow effect</span>
                        </div>
                    </li>                                        
                </ul>
                <br />
                <br />
            </div>
        )
    }
}