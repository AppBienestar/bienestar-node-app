const express = require('express');
const app = express();
const userRoutes = require('./core/user/interfaces/routes/user.routes');

app.use(express.json());
app.use('/api/users', userRoutes);

module.exports = app;
