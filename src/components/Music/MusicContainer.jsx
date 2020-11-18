import React from "react";
import {connect} from "react-redux";
import {artistSearchText, setIsFetching, setMusic} from "../../redux/music-reducer";
import Musics from "./Musics";
import {getMusic} from "../../api/api";
import Loader from "../Loader/Loader";

class MusicContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        getMusic(6, '*')
            .then(data => {
                this.props.setIsFetching(false);
                let musics = data.data;
                this.props.setMusic(musics);
            })
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
                            getMusic={this.props.getMusic}
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
})(MusicContainer);