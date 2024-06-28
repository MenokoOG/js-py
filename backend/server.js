const express = require('express');
const app = express();
const port = 3000;

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
