import YTSearch from "youtube-api-search";
import {SEARCH} from "./types";

const KEY = 'AIzaSyDbJTeWWjVAA2L5nTgzoJz007iAJSS5h7s';

export function search(searchTerm) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            YTSearch({
                key: KEY,
                term: searchTerm
            }, (videos) => {
                return resolve(dispatch(loadVideos(searchTerm, videos)));
            });
        });
    }
}

function loadVideos(searchTerm, videos) {
    return {
        type: SEARCH,
        term: searchTerm,
        payload: videos
    }
}