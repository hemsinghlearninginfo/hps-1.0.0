
module.exports = {
    ErrorObject,
};

function ErrorObject(stack, message) {
    return {
        stack,
        message
    };
}
