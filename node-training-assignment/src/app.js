const mongoose = require('./user/db');
const app = require('./user/server');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
