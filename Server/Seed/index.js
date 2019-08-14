// var user = require('./user');
// var userRoles = require('./userRoles');
// var emailTypes = require('./emailTypes');
// var eventTypes = require('./eventTypes');
var market = require('./market');

module.exports = {
    seedDB
}

const runDBObjects = async () => {
    const fistResponse = await market.seedmarket();
    // const fistResponse = await userRoles.seedUserRoles();
    // const secondResponse = await user.seedSysAdmin(fistResponse);
    // const thirdAsyncRequest = await emailTypes.seedEmailTypes(secondResponse);
    // const fourthAsyncRequest = await eventTypes.seedEventTypes(thirdAsyncRequest);
    // const fifthAsyncRequest = await market.seedmarket(fourthAsyncRequest);
};

function seedDB() {
    runDBObjects();
}