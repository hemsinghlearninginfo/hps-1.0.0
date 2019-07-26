const express = require('express');
const router = express.Router();
const faqService = require('../Service/faq.service');
const { body } = require('express-validator');
const faqValidation = require('../validation/faq.validation');
const { validationResult } = require('express-validator/check');

// routes
router.get('/', getAll);
router.post('/create'
    , faqValidation.validate('create')
    , create);
// router.post('/register', register);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    faqService.getAll()
        .then(faqs => {
            res.json(faqs)
        })
        .catch(err => {
            next(err)
        });
}

function create(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    faqService.create(req.body)
        .then(() => res.json({}))
        .catch(err => {
            next(err);
        });
}

// function register(req, res, next) {
//     userService.create(req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }


// function getCurrent(req, res, next) {
//     userService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function getById(req, res, next) {
//     userService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function update(req, res, next) {
//     userService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     userService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

function validate() {
    console.log(body);
    next();
}