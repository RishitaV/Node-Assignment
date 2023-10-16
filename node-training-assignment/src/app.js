require('dotenv').config();
const path = require("path");
const dotenv = require('dotenv')
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('./db');
const app = require('./server');
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
