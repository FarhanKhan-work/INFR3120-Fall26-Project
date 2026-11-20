const express = require('express');
const router = express.Router();
const Gig = require('../models/Gig');

// show all gigs
router.get('/', async (req, res, next) => {
  try {
    const gigs = await Gig.find().sort({ createdAt: -1 });
    res.render('gigs/index', { title: 'Browse Gigs', gigs });
  } catch (err) {
    next(err);
  }
});

// form to add a new gig
router.get('/new', (req, res) => {
  res.render('gigs/new', { title: 'Post a Gig', errors: null, gig: {} });
});

// save the new gig
router.post('/', async (req, res, next) => {
  try {
    const { title, category, location, budget, description, postedBy } = req.body;
    await Gig.create({ title, category, location, budget, description, postedBy });
    res.redirect('/gigs');
  } catch (err) {
    // if a required field is missing, show the form again with the errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).render('gigs/new', { title: 'Post a Gig', errors: messages, gig: req.body });
    }
    next(err);
  }
});

// one gig
router.get('/:id', async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return res.status(404).render('error', { message: 'Gig not found', error: {} });
    res.render('gigs/show', { title: gig.title, gig });
  } catch (err) {
    next(err);
  }
});

// edit form
router.get('/:id/edit', async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return res.status(404).render('error', { message: 'Gig not found', error: {} });
    res.render('gigs/edit', { title: 'Edit Gig', errors: null, gig });
  } catch (err) {
    next(err);
  }
});

// save the edit (form sends PUT through method-override)
router.put('/:id', async (req, res, next) => {
  try {
    const { title, category, location, budget, description, postedBy } = req.body;
    await Gig.findByIdAndUpdate(req.params.id, { title, category, location, budget, description, postedBy }, { runValidators: true });
    res.redirect('/gigs/' + req.params.id);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).render('gigs/edit', { title: 'Edit Gig', errors: messages, gig: { _id: req.params.id, ...req.body } });
    }
    next(err);
  }
});

// delete a gig
router.delete('/:id', async (req, res, next) => {
  try {
    await Gig.findByIdAndDelete(req.params.id);
    res.redirect('/gigs');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
