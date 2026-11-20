const express = require('express');
const router = express.Router();
const Gig = require('../models/Gig');

// home page - show a few recent gigs
router.get('/', async (req, res) => {
  try {
    const gigs = await Gig.find().sort({ createdAt: -1 }).limit(3);
    res.render('index', { title: 'GigLink', gigs });
  } catch (err) {
    res.render('index', { title: 'GigLink', gigs: [] });
  }
});

module.exports = router;
