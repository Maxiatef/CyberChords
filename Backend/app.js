const express = require('express');
const cors = require('cors');
const musicRoutes = require('./routes/musicRoutes');
const { connectDB } = require('./config');

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/music', musicRoutes);

app.listen(PORT, () => {
    console.log(`Songs is running on port ${PORT}`);
});
