import React, { useEffect, useState } from 'react';
import './player.css';
import { useLocation } from 'react-router-dom';
import apiClient from '../../Spotify';
import SongCard from '../../components/songcard/songCard';
import Queue from '../../components/queue/queue';
import AudioPLayer from '../../components/audioPlayer/audioPlayer';
import Widgets from '../../components/widgets/widget';

// export default function Player() {
//     const location = useLocation();
//     const [tracks, setTracks] = useState([]);
//     const [currentTrack, setCurrentTrack] = useState({});
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [album, setAlbum] = useState({});

//     useEffect(() => {
//         const fetchAlbum = async () => {
//             if (location.state && location.state.id) {
//                 try {
//                     const response = await apiClient.get(`/albums/${location.state.id}`);
//                     if (response.data && response.data.tracks && response.data.tracks.items) {
//                         setTracks(response.data.tracks.items);
//                         setCurrentTrack(response.data.tracks.items[0] || {});
//                         setAlbum(response.data);
//                         console.log(response.data);
//                     } else {
//                         console.error('Unexpected response structure:', response.data);
//                     }
//                 } catch (error) {
//                     console.error('Error fetching album:', error);
//                 }
//             } else {
//                 console.error('No album ID found in location state');
//             }
//         };

//         fetchAlbum();
//     }, [location.state]);

//     useEffect(() => {
//         setCurrentTrack(tracks[currentIndex]?.track || {});
//     }, [currentIndex, tracks]);

//     return (
//         <div className='screen-container'>
//             <div className='left-player-body'>
//                 <AudioPlayer
//                     currentTrack={currentTrack}
//                     total={tracks}
//                     currentIndex={currentIndex}
//                     setCurrentIndex={setCurrentIndex}
//                     albumimg={album?.images[0]?.url}
//                 />
//             </div>
//             <div className='right-player-body'>
//                 {album?.images ? (
//                     <SongCard album={album} />
//                 ) : (
//                     <div>Loading...</div>
//                 )}
//                 <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
//             </div>
//         </div>
//     );
// }


export default function Player() {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (location.state) {
            apiClient
                .get("playlists/" + location.state?.id + "/tracks")
                .then((res) => {
                    setTracks(res.data.items);
                    setCurrentTrack(res.data?.items[0]?.track);
                });
        }
    }, [location.state]);

    useEffect(() => {
        setCurrentTrack(tracks[currentIndex]?.track);
    }, [currentIndex, tracks]);

    return (
        <div className="screen-container flex">
            <div className="left-player-body">
                <AudioPLayer
                    currentTrack={currentTrack}
                    total={tracks}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
                <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
            </div>
            <div className="right-player-body">
                <SongCard album={currentTrack?.album} />
                <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
            </div>
        </div>
    );
}
