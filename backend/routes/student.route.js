let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let studentSchema = require('../models/Student');

//CREATE Student
router.route('/create-student').post((req, res, next) => {
    console.log('/student/create-student/:POST');
    studentSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data);
            res.json(data);
        }
    })
});

//READ Students
router.route('/').get((req, res) => {
    studentSchema.find((error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get Single Student
router.route('/edit-student/:id').get((req, res) => {
    studentSchema.findById(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data)
            console.log('Student updated successfully!')
        }
    })
})

//Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
    studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;