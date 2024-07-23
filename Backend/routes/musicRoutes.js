const express = require('express');
const { getMusic, addMusic, getMusicGenre } = require('../controllers/musicController');

const router = express.Router();

router.get('/', getMusic);
router.post('/', addMusic);
router.get('/genre/:genre', getMusicGenre);

module.exports = router;
