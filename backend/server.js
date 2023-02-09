let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// express route
const movieRoute = require('../backend/routes/movie.route')
const actorRoute = require('../backend/routes/actor.route')
const producerRoute = require('../backend/routes/producer.route')


// connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
    console.log("database connected successfully!");
},
    error => {
        console.log("could not connect to database" + error);
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/movies', movieRoute)
app.use('/actors', actorRoute)
app.use('/producers', producerRoute)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
})

// 404 error
app.use((req,res,next) => {
    res.status(404).send('Error 404!')
});

app.use((err, req, res, next) => {
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})