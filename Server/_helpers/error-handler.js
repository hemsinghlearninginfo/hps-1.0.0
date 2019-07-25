module.exports = errorHandler;
const myErrorService = require('../Service/myError.service');
const commonMethod = require('../_helpers/common-methods');


function errorHandler(err, req, res, next) {
    myErrorService.interLogger(commonMethod.ErrorObject(err.stack, err.message));

    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}