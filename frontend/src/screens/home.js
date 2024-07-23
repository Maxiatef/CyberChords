import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Library from './library';
import Feed from './feed';
import Trending from './trending';
import Player from './player';
import Favorites from './favorites';
import './home.css';
import Sidebar from '../components/sidebar';

export default function Home() {
    return (
        <BrowserRouter>
            <div className='main-body'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Library />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/trending' element={<Trending />} />
                    <Route path='/player' element={<Player />} />
                    <Route path='favorites' element={<Favorites />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
