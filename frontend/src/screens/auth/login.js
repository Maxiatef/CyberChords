import React from 'react'
import { loginEndPoint } from '../../Spotify'
import './login.css'

export default function Login() {
    return (
        <div className='login-page'>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='logo-Spotify' className='logo'></img>
            <a href={loginEndPoint} className='login-btn'>Login with Spotify</a>
        </div>
    )
}
