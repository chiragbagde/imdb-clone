let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

// Movie model
let movieSchema = require("../models/Movie")

// Create Movie
router.post("/create-movie", (req, res, next) => {
    movieSchema.create(req.body, (error, data) => {
        if(error){
            return next(error);
        }else {
            console.log(data);
            res.json(data);
        }
    });
});
// read Movie
router.get("/", (req, res, next) => {
    movieSchema.find((error, data) => {
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

// Update Movie
router
    .route("/update-movie/:id")
    // get single movie
    .get((req,res, next) => {
        movieSchema.findById(
            req.params.id, (error, data) => {
                if(error){
                    return next(error);
                }else{
                    res.json(data);
                }
            }
        );
    })

    // update movie data
    .put((req, res, next) => {
        movieSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
        (error, data) => {
            if(error){
                console.log(error);
                return next(error);
            }else{
                res.json(data);
                console.log("Movie updated successfully !");
            }
        });
    })

    // delete movie

router.delete("/delete-movie/:id",
 (req, res, next) => {
    movieSchema.findByIdAndRemove(
        req.params.id, (error, data) => {
            if(error){
                return next(error);
            } else {
                res.status(200).json({
                    msg:data,
        })}
    });
 });

module.exports = router;