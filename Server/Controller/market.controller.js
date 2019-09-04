const express = require('express');
const router = express.Router();
const marketService = require('../Service/market.service');

// routes
router.get('/', get);
router.get('/getall', getAll);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function get(req, res, next) {
    marketService.get()
        .then(faqs => { res.json(faqs) })
        .catch(err => { next(err) });
}

function getAll(req, res, next) {
    marketService.getAll()
        .then(faqs => { res.json(faqs) })
        .catch(err => { next(err) });
}

function create(req, res, next) {
    marketService.create(req.body)
        .then(() => res.json({}))
        .catch(err => { next(err); });
}

function update(req, res, next) {
    marketService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    marketService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
