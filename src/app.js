import React, {Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";

import logo from '../img/logo.png';
import sampleImage from '../img/sampleimg.jpg';

export default class App extends Component {

    getTopToolbar() {
        return (
            <div className="row">
                <div className="col">
                    <div className="top-toolbar container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="menu">
                                    <FontAwesomeIcon icon={faBars}
                                                     className='fa-3x icon'/>
                                    <a href="#">
                                        <img src={logo} width={80}/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-4 text-center bg-light">
                                {this.getSearchBar()}
                            </div>
                            <div className="col bg-info">03</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getSearchBar() {
        return (
            <div className="row search-area pr-2 pl-2">
                <div className="col-11">
                    <input type="text" placeholder="Keresés"/>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faSearch}
                                     className='fa-2x search-btn'/>
                </div>
            </div>
        );
    }

    getContentArea() {
        return (
            <div className="row pt-3">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Ajánlott</h1>
                                <div className="row boxes">
                                    {this.getBox()}
                                    {this.getBox()}
                                    {this.getBox()}
                                    {this.getBox()}
                                    {this.getBox()}
                                    {this.getBox()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getBox() {
        return (
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
        return (
            <div className='container-fluid'>
                {this.getTopToolbar()}
                {this.getContentArea()}
            </div>
        );
    }

}