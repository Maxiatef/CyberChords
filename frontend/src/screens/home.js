import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Library from './Library/library';
import Feed from './feed';
import Trending from './trending';
import Player from './player';
import Favorites from './favorites';
import './home.css';
import Sidebar from '../components/sidebar';
import Login from './auth/login';
import { setClientToken } from '../Spotify';

export default function Home() {
    const [token, setToken] = React.useState("");

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token');
        const hash = window.location.hash;

        if (!tokenFromStorage && hash) {
            const token = hash.split('&')[0].split('=')[1];
            if (token) {
                localStorage.setItem('token', token);
                setToken(token);
                setClientToken(token);
                // Clear the hash from the URL
                window.location.hash = '';
            }
        } else if (tokenFromStorage) {
            setToken(tokenFromStorage);
            setClientToken(tokenFromStorage);
        }
    }, []);

    return !token ? (
        <Login />
    ) : (
        <BrowserRouter>
            <div className='main-body'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Library />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/trending' element={<Trending />} />
                    <Route path='/player' element={<Player />} />
                    <Route path='/favorites' element={<Favorites />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
