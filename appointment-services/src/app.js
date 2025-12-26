const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/appointments', require('./routes/appointment.routes'));

module.exports = app; 