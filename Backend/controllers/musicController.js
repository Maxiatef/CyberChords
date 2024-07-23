const Music = require('../models/musicModel');

const getMusic = async (req, res) => {
    try {
        const music = await Music.find();
        res.json(music);
        console.log("getMusic")
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
        console.log("error getMusic")
    }
};

const addMusic = async (req, res) => {
    const { title, artist, album, genre, url } = req.body;

    try {
        const newMusic = new Music({ title, artist, album, genre, url });
        await newMusic.save();
        res.status(201).json(newMusic);
        console.log("addMusic")
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
        console.log("error addMusic")
    }
}

    //get song on genre
    const getMusicGenre = async (req, res) => {
        try {
            const music = await Music.find({ genre: req.params.genre });
            res.json(music);
            console.log("getMusicGenre")
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
            console.log("error getMusicGenre")
        }
    };
    //http://localhost:5000/api/music/genre/"genre"

    

    module.exports = { getMusic, addMusic, getMusicGenre};
