import React, { useEffect, useState } from 'react';
import APIKit from '../../Spotify.js';
import './library.css';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Library() {

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        APIKit.get('me/playlists').then(function (response) {
            setPlaylists(response.data.items);
            console.log(response.data.items);
        });
    }, []); // Add an empty dependency array to run the effect only once

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate('/player', { state: { id: id } });
    };

    return (
        <div className='screen-container'>
            <div className='library-body'>
                {playlists?.map((playlist) => (
                    <div className='playlist-card' key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
                        <img src={playlist.images[0].url} className='playlist-image' alt={playlist.name} ></img>
                        <p className='playlist-title'>{playlist.name}</p>
                        <p className='playlist-subtitle'>{playlist.tracks.total} songs</p>
                        <div className='playlist-fade'>
                            <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
                                <AiFillPlayCircle />
                            </IconContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
