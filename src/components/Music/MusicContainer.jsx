import React from "react";
import {connect} from "react-redux";
import {artistSearchText, getMusicSearch, getMusicThunk, setIsFetching, setMusic} from "../../redux/music-reducer";
import Musics from "./Musics";
import {getMusic} from "../../api/api";
import Loader from "../Loader/Loader";

class MusicContainer extends React.Component {
    componentDidMount() {
       this.props.getMusicThunk()
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                    ? <Loader/>
                    : <Musics
                            { ...this.props }
                            musics={this.props.musics}
                            searchText={ this.props.searchText }
                            getMusicSearch={this.props.getMusicSearch}
                        />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        musics: state.musicsPage.musics,
        searchText: state.musicsPage.searchText,
        isFetching: state.musicsPage.isFetching,
        newArtist: state.musicsPage.newArtist
    }
}

export default connect(mapStateToProps, {
    setMusic,
    setIsFetching,
    artistSearchText,
    getMusicThunk,
    getMusicSearch
})(MusicContainer);