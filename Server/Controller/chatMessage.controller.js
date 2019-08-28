const express = require('express');
const router = express.Router();
const chatMessageService = require('../Service/chatMessage.service');

// routes
router.get('/', getAll);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    chatMessageService.getAll()
        .then(chatMessage => { res.json(chatMessage) })
        .catch(err => { next(err) });
}

function create(req, res, next) {
    chatMessageService.create(req.body)
        .then(() => res.json({}))
        .catch(err => { next(err); });
}

function update(req, res, next) {
    chatMessageService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    chatMessageService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
