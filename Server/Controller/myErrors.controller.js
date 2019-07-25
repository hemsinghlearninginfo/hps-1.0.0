const express = require('express');
const router = express.Router();
const myErrorService = require('../Service/myError.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    myErrorService.getAll()
        .then(myErrors => res.json(myErrors))
        .catch(err => next(err));
}

function getById(req, res, next) {
    myErrorService.getById(req.params.id)
        .then(myError => myError ? res.json(myError) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    myErrorService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    myErrorService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    myErrorService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}