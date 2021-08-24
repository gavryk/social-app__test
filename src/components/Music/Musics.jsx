import React from "react";
import './Music.scss'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";

const Musics = (props) => {

    let onSearchChanges = (value) => {
        props.getMusicSearch(value.search)
    }

    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Music</h1>
            <SearchMusicForm onSubmit={ onSearchChanges }/>
            <div className="music-wrapper row pt-2">
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

const SearchMusic = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className="search-input text-center">
            <Field
                type='text'
                component={ Input }
                id='search-music'
                className="form-control mr-sm-2 mb-2"
                placeholder='Search...'
                name='search'
            />
            <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>
    )
}

const SearchMusicForm = reduxForm({form: 'search-music-form'})(SearchMusic);

export default Musics;