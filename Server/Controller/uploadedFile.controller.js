const express = require('express');
const router = express.Router();
const uploadedFileService = require('../Service/uploadedFile.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);
// router.post('/register', register);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// 

module.exports = router;

function getAll(req, res, next) {
    uploadedFileService.getAll()
        .then(faqs => { res.json(faqs) })
        .catch(err => { next(err) });
}

function getById(req, res, next) {
    uploadedFileService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    uploadedFileService.create(req.body)
        .then(() => res.json({}))
        .catch(err => { next(err); });
}

function update(req, res, next) {
    uploadedFileService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    uploadedFileService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
