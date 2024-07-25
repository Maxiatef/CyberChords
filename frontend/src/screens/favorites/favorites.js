import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './favorites.css'; // Import your CSS file

export default function Favorites() {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLikedSongs = async () => {
            try {
                const token = localStorage.getItem('token'); // Replace with your method to get the token
                const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setSongs(response.data.items);
            } catch (err) {
                setError('Error fetching songs');
                console.error(err);
            }
        };

        fetchLikedSongs();
    }, []);

    return (
        <div className='screen-container'>
            <div
                className='queueContainer'>
                <div className='queue'>
                    <h2 className='upNext'>Liked Songs</h2>
                    <div className='queue-list'>
                        {error && <p>{error}</p>}
                        {songs.length === 0 && !error && <p>No liked songs found.</p>}
                        {songs.map((song, index) => (
                            <div key={index} className='queue-item'>
                                <p className='track-name'>{song.track.name}</p>
                                <p>{song.track.artists.map(artist => artist.name).join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
