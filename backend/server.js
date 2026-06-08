const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./database/db');

const movieRoute = require('./routes/movie.route');
const actorRoute = require('./routes/actor.route');
const producerRoute = require('./routes/producer.route');

mongoose.connect(dbConfig.db)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/movies', movieRoute);
app.use('/actors', actorRoute);
app.use('/producers', producerRoute);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).json({ error: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
