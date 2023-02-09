let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let actorSchema = require("../models/Producer")

router.post("/create-producer", (req, res, next) => {
    actorSchema.create(req.body, (error, data) => {
        if(error){
            return next(error);
        }else {
            console.log(data);
            res.json(data);
        }
    });
});
router.get("/", (req, res, next) => {
    actorSchema.find((error, data) => {
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

router
    .route("/update-producer/:id")
    .get((req,res, next) => {
        actorSchema.findById(
            req.params.id, (error, data) => {
                if(error){
                    return next(error);
                }else{
                    res.json(data);
                }
            }
        );
    })

    .put((req, res, next) => {
        actorSchema.findByIdAndUpdate(
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
                console.log("Actor updated successfully !");
            }
        });
    })


router.delete("/delete-producer/:id",
 (req, res, next) => {
    actorSchema.findByIdAndRemove(
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