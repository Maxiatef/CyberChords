const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    genre: String,
    url: String,
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;


/*
{ 
    "title": "Song 1",
    "artist": "Artist 1",
    "album": "Album 1",
    "genre": "Genre 1",
    "url": "URL 1"
}
*/