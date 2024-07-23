const mongose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongose.connect("mongodb+srv://PetpalWeb:PetpalWeb@cluster0.ouppjuv.mongodb.net/");
        console.log(`Database connected:${conn.connection.host}, ${conn.connection.name}, songs database`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}


module.exports = { connectDB };