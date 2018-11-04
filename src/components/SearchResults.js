import React, {Component} from 'react';
import {connect} from 'react-redux';
import {search} from "../actions";

class SearchResults extends Component {

    getSearchResults() {
        return this.props.videos.map((item, index) => {
            return this.getVideoBox(item);
        });
    }

    getVideoBox(video) {
        console.log(video);
        return (
            <div className="card d-flex flex-row mb-3" key={video.id.videoId}>
                <img src={video.snippet.thumbnails.medium.url} width={246} height={138} />
                <div className="card-body pt-0 pb-0 pr-0 pl-3">
                    <h3 className='mb-0'>{video.snippet.title}</h3>
                    <div>
                        <span style={{ color: '#888888' }}>{video.snippet.channelTitle}</span>
                        <span>12 E</span>
                        <span>1 hónapja</span>
                    </div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.videos) {
            return this.getSearchResults();
        }
    }
}

function mapStateToProps(state) {
    return {
        videos: state.search.videos
    }
}

export default connect(mapStateToProps, null)(SearchResults);