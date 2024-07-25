import React from 'react';
import './queue.css';

function msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default function Queue({ tracks, setCurrentIndex }) { // Destructure props
    console.log(tracks);
    return (
        <div className='queueContainer flex'>
            <div className='queue flex'>
                <p className='upNext'>Up Next</p>
                <div className='queue-list'>
                    {tracks?.map((track, index) => (
                        <div key={index} onClick={() => setCurrentIndex(index)} className='queue-item'>
                            <p className='track-name'>{track.track.name}</p>
                            <p>{msToMinutesAndSeconds(track.track.duration_ms)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
    