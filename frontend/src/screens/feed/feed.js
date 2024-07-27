import React, { useState } from 'react';
import './feed.css';
import { useNavigate } from 'react-router-dom';

export default function Feed() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!query) return;

        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&market=US`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setResults(data.tracks.items);
            console.log("🚀 ~ handleSearch ~ data.tracks.items:", data.tracks.items);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const playAlbum = (track) => {
        const album = track.album;
        navigate('/player', { state: { id: album.id } });
    };

    return (
        <div className='screen-container'>
            <div className='feed'>
                <form onSubmit={handleSearch} className='search-form'>
                    <input
                        type='text'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search for songs...'
                        className='search-input'
                    />
                    <button type='submit' className='search-button'>Search</button>
                </form>
                <div className='results-container'>
                    {results.length > 0 ? (
                        <div className='results-list'>
                            {results.map((track) => (
                                <div
                                    key={track.id}
                                    className='result-card'
                                    onClick={() => playAlbum(track)}
                                >
                                    <img
                                        src={track.album.images[0]?.url}
                                        alt={track.name}
                                        className='result-image'
                                    />
                                    <div className='result-info'>
                                        <p className='result-title'>{track.name}</p>
                                        <p className='result-artist'>
                                            {track.artists.map(artist => artist.name).join(', ')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
