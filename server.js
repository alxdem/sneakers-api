const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product-routes');
const pageRoutes = require('./routes/page-routes');
require('dotenv').config();

const PORT = 3001;

const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gai3ieq.mongodb.net/sneakers-api?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(productRoutes);
app.use(pageRoutes);

mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});

