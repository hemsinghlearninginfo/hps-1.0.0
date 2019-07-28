const express = require('express');
const router = express.Router();
const extraService = require('../Service/extra.service');

router.post('/addnewsletterrequest', addNewsLetterRequest);

module.exports = router;

function addNewsLetterRequest(req, res, next) {
    extraService.addNewsLetterRequest(req.body)
        .then(() => res.json({}))
        .catch(err => { next(err); });
}
