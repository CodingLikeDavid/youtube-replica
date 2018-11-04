import React, {Component} from 'react';

import {connect} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faSearch, faBell, faVideo, faTh, faComment} from "@fortawesome/free-solid-svg-icons";

import user from '../img/user.jpg';
import logo from '../img/logo.png';
import sampleImage from '../img/sampleimg.jpg';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            isLoading: false,
            searchTerm: ''
        }

        this.setLoading = this.setLoading.bind(this);
    }

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
                            <div className="col-4 text-center">
                                {this.getSearchBar()}
                            </div>
                            <div className="col top-right-menu">
                                {this.getTopRightMenu()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getTopRightMenu() {
        return (
            <div className='text-right'>
                <FontAwesomeIcon icon={faVideo}
                                 className='icon'/>
                <FontAwesomeIcon icon={faTh}
                                 className='icon'/>
                <FontAwesomeIcon icon={faComment}
                                 className='icon'/>
                <FontAwesomeIcon icon={faBell}
                                 className='icon'/>
                <img src={user}/>
            </div>
        );
    }

    setLoading(isLoading) {
        this.setState({
            isLoading
        });
    }

    getSearchBar() {
        return (
            <SearchBar setLoading={this.setLoading}/>
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
                                <div className="separator-line"></div>
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

    getLoadingBar() {
        if (this.state.isLoading) {
            return (
                <div className="row">
                    <div className="col">
                        <div className='loader'></div>
                    </div>
                </div>
            );
        }
    }

    getSearchResultArea() {
        return (
            <div className="row pt-3">
                <div className="col">
                    <div className="container search-result-area">
                        <SearchResults />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='container-fluid'>
                {this.getLoadingBar()}
                {this.getTopToolbar()}
                {!this.props.term && this.getContentArea()}
                {this.props.term && this.getSearchResultArea()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        term: state.search.term,
        videos: state.search.videos
    }
}

export default connect(mapStateToProps, null)(App);