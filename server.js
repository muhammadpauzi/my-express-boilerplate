require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api/index'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});