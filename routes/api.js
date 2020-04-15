//import express create router and json middleware
let express=require('express');
let router = express.Router();
router.use(express.json());

let StudentCollection = require('../models/StudentSchema')
let TeacherCollection =require('../models/TeacherSchema')
//sanity
// router.get('/test', (req, res)=>{
//     res.send('this is a test')
// });
// get all request
router.get('/', (req, res)=>{
    StudentCollection.find({}, (error, result)=>{
        error ? res.send(error) : res.send(result)
    })
})
//get student by email

router.get('/:studentEmail', (req, res)=>{
    StudentCollection.find({
        studentEmail : req.params.studentEmail}, (error, result)=>{
            error ? res.send(error) : res.send(result)
    })
});

create , student, teacher
router.post('/', (req, res)=>{
    // res.send('this is a create test')
StudentCollection.create(req.body, (error, results)=>{
    error ? res.send(error) : res.send(results)
})
});

router.post('/', (req, res)=>{
    // res.send('this is a create test')
TeacherCollection.create(req.body, (error, results)=>{
    error ? res.send(error) : res.send(results)
})
});





//update test
router.put('/:studentEmail', (req, res)=>{
    // res.send('this is a update test')
    StudentCollection.findOneAndUpdate({studentEmail: req.params.studentEmail}, req.body, (error, result)=>{
        error ? res.send(error) : res.send(`${req.params.studentEmail}, Updated`)
    })
});

//delete test
router.delete('/:studentName', (req, res)=>{
    // res.send('this is a delete test')
StudentCollection.findOneAndDelete({studentName: req.params.studentName}, (error, result)=>{
    error ? res.send(error) : res.send(`${req.params.studentName} has been deleted`)
})
});

module.exports = router;