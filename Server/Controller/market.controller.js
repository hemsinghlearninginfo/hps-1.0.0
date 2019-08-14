const express = require('express');
const router = express.Router();
const writeUpService = require('../Service/market.service');

// routes
router.get('/', get);
router.get('/getall', getAll);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function get(req, res, next) {
    writeUpService.get()
        .then(faqs => { res.json(faqs) })
        .catch(err => { next(err) });
}

function getAll(req, res, next) {
    writeUpService.getAll()
        .then(faqs => { res.json(faqs) })
        .catch(err => { next(err) });
}

function create(req, res, next) {
    writeUpService.create(req.body)
        .then(() => res.json({}))
        .catch(err => { next(err); });
}

function update(req, res, next) {
    writeUpService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    writeUpService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
