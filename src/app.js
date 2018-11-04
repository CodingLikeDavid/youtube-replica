import React, { Component } from 'react';

import sampleImage from '../img/sampleimg.jpg';

export default class App extends Component {

    getTopToolbar() {
        return(
            <div className="row">
                <div className="col">
                    <div className="top-toolbar container-fluid">
                        <div className="row">
                            <div className="col bg-secondary">
                                <div className="menu">menu</div>
                                <div className="icon">icon</div>
                            </div>
                            <div className="col-6 bg-light">02</div>
                            <div className="col bg-info">03</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getContentArea() {
        return(
            <div className="row pt-3">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Ajánlott</h1>
                                <div className="row boxes">
                                    { this.getBox() }
                                    { this.getBox() }
                                    { this.getBox() }
                                    { this.getBox() }
                                    { this.getBox() }
                                    { this.getBox() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getBox() {
        return(
            <div className="col card m-1">
                <img className="card-img-top" src={sampleImage}/>
                <div className="card-body p-0">
                    <h2>This is a video</h2>
                    <div className='info'>Dávid Csejtei</div>
                    <div className='info'>
                        <span>12 E megtekintés</span>
                        <span>1 hónapja</span>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return(
            <div className='container-fluid'>
                { this.getTopToolbar() }
                { this.getContentArea() }
            </div>
        );
    }

}