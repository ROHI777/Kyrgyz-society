const express = require('express')
const subsModel= require('./models')

const router = express.Router()
router.get('/',  function (req, res) {
    res.render('home')
})

router.get('/about-us', function (req, res) {
    res.render('about-us')
})

router.get('/album', function (req, res) {
    res.render('album2')
})

router.get('/contact-us', function (req, res) {
    res.render('contact-us')
})

router.get('/events', function (req, res) {
    res.render('events')
})

router.get('/donate', function (req, res) {
    res.render('donate')
})




router.post("/subscribe", async (req, res) => {
    const subscribers = new subsModel(req.body);

      
    try {
        
      await subscribers.save();
    //   req.flash('message', 'Success') 
        res.redirect('subsform' 
)} catch (error) {
      res.status(500).send(error);
    }
});

       
router.get('/subsform', function (req, res) {
    res.render('subsform')
})

    // 
    // })

module.exports = router