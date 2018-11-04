import React, { Component } from 'react';
import { connect } from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faSearch, faBell, faVideo, faTh, faComment} from "@fortawesome/free-solid-svg-icons";

import { search } from "../actions";
import _ from "lodash";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.searchOnYoutube = _.debounce(this.searchOnYoutube, 1500);
    }

    onSearchTermChange(searchTerm) {
        this.setState({
            searchTerm
        });

        this.searchOnYoutube(searchTerm);
    }

    searchOnYoutube(searchTerm) {
        this.props.setLoading(true);

        this.props.search(searchTerm).then(videos => {
            this.props.setLoading(false);
        });
    }

    render() {
        return(
            <div className="row search-area pr-2 pl-2">
                <div className="col-11">
                    <input type="text" value={this.state.searchTerm}
                           onChange={(event) => this.onSearchTermChange(event.target.value)} placeholder="Keresés"/>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faSearch}
                                     className='fa-2x search-btn'/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        term: state.search.term
    }
}

export default connect(mapStateToProps, { search })(SearchBar);