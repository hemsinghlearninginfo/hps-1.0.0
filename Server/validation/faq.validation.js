const { body } = require('express-validator/check')
const faqService = require('../Service/faq.service');

exports.validate = (method) => {
    switch (method) {
        case 'create': {
            return [
                body('question', 'Question is required field').exists(),
                body('answer', 'Answer is required field').exists()
            ]
        }
    }
}

//.custom((value, { req }) => value === req.body.password),