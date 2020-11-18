import React from "react";
import './Music.scss'
import {getMusic} from "../../api/api";

const Musics = (props) => {

    let newArtist = React.createRef();

    let onSearchChanges = (e) => {
        let text = e.target.value;
        props.artistSearchText(text);
    }

    let searchArtist = () => {
        props.searchNewArtist();
        getMusic(6, props.newArtist)
            .then(response => {
                props.setIsFetching(false);
                let musics = response.data.data;
                props.setMusic(musics);
            })
    }

    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Music</h1>
            <div className="search-input">
                <input onChange={ onSearchChanges } ref={newArtist} value={ props.searchText } className="form-control mr-sm-2"/>
                <button onClick={ searchArtist } className="btn btn-outline-success my-2 my-sm-0">Search</button>
            </div>
            <div className="music-wrapper row">
                {
                    props.musics.map((music) => {
                        return (
                            <div key={music.id} className='card col-lg-4 col-md-6 col-xs-12  mb-4 min-h-100'>
                                <img src={music.album.cover_medium} alt=""/>
                                <h4>{music.title}</h4>
                                <audio controls className='w-100'>
                                        <source src={music.preview} type="audio/mpeg"/>
                                </audio>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Musics;