const express = require('express');
const router = express.Router();
const blogpost = require('../models/blogpost');



// Routes used to either get data or post data from(to) MongoDB//

//this route pulls all information from MongoDB, commented out console that display it on server side//
router.get('/', (req, res) => {

    blogpost.find({  })
        .then((data) => {
            //console.log('Data: ', data);//
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

//.post is used to post the payload to the MongoDB 
router.post('/save', (req, res) => {
    const data = req.body;

        const newblogpost = new blogpost(data);

        newblogpost.save((error) => {
            if (error){
                res.status(500).json({msg: 'Sorry Internal Server Error'});
                return;
            }else
            return res.json({
                msg:('Your data has been saved to the database')
            });
        })
    });


    

//blank route for testing
router.route('/name', (req, res) => {
      
    
});



module.exports = router;