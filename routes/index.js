let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/index', { 
    title: 'Express Maleo mikola' 
  
  });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { 
    title: 'About Express MALEO',
    author: 'COMPT125-S2018'
 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { 
    title: 'Contact Us',
    authors: ['Maleo', 'MarIS', 'Bazoluka', 'ilombe ', 'John']
 });
});

/* GET contact page. */
router.get('/Index', function(req, res, next) {
  res.render('CONTENT/Contrat', { 
    
    
 });
});

module.exports = router;
