var express = require('express'),
 router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

//aakriti
router.get('/aakriti', (req, res) => res.render('aakriti'));
router.get('/aakriti2', (req, res) => res.render('aakriti2'));

//kirdaar events
router.get('/kirdar_events', (req, res) => res.render('kirdar_events'));
router.get('/kirdaar2', (req, res) => res.render('kirdaar2'));
//convex 
router.get('/convex_events', (req, res) => res.render('convex_events'));
router.get('/convex', (req, res) => res.render('convex'));
// cine
router.get('/cine', (req, res) => res.render('cine'));
// malang

router.get('/malang_events', (req, res) => res.render('malang_events'));
router.get('/malang2', (req, res) => res.render('malang2'));
//Raag

router.get('/raag_events', (req, res) => res.render('raag_events'));


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;