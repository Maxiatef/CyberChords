import React from 'react'
import './albumInfo.css';

export default function AlbumInfo({ album }) {
    // console.log("album info", album)
    const artists = album?.artists.map((artist) => artist.name).join(', ');
    const albumTypeText = album?.album_type === 'album' ? 'an album' : 'a single';
    return (
        <div className='albumInfo-card'>
            <div className='albumName'>
                <div className='marquee'>
                    <p>{album?.name + " - " + artists} </p>
                </div>
            </div>
            <div className='album-info'>
                <p>{`${album?.name} is ${albumTypeText} with ${album?.total_tracks} songs`} </p>
            </div>
            <div className='album-release'>
                <p> {`Release date: ${album?.release_date}`}</p>
            </div>
        </div>
    )
}
