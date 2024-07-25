import { React, useEffect, useState } from 'react';
import "./player.css";
import { useLocation } from 'react-router-dom';
import apiClient from '../../Spotify';
import SongCard from '../../components/songcard/songCard';
import Queue from '../../components/queue/queue';
import AudioPlayer from '../../components/audioPlayer/audioPlayer';

export default function Player() {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (location.state) {
            apiClient.get(`/playlists/${location.state.id}`).then((response) => {
                setTracks(response.data.tracks.items);
                setCurrentTrack(response.data.tracks.items[0]?.track || {});
                console.log(response.data.tracks.items);
                console.log("🚀 ~ apiClient.get ~ response.data.tracks.items[0]:", response.data.tracks.items[0]);
                console.log("first track album", response.data.tracks.items[0]?.track?.album?.name);
            });
        }
    }, [location.state]); // Add location.state as a dependency

    useEffect(() => {
        setCurrentTrack(tracks[currentIndex]?.track || {});
    }, [currentIndex, tracks]);

    return (
        <div className='screen-container'>
            <div className='left-player-body'>
                <AudioPlayer 
                currentTrack={currentTrack} 
                total={tracks}
                currentIndex={currentIndex} 
                setCurrentIndex={setCurrentIndex} />
            </div>
            <div className='right-player-body'>
                {currentTrack.album ? (
                    <SongCard album={currentTrack.album} />
                ) : (
                    <div>Loading...</div>
                )}
                <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
            </div>
        </div>
    );
}
