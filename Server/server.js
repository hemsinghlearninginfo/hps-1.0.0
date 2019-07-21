require('rootpath')();
require('dotenv').config({ path: 'process.env' });

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

// Seedind DB
// const seed = require('./seed');
// seed.seedDB();

// const cluster = require("cluster");
// const numCPUs = require("os").cpus().length;

// // Multi-process to utilize all CPU cores.
// if (cluster.isMaster) {
//     console.error(`Node cluster master ${process.pid} is running`);

//     // Fork workers.
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }

//     cluster.on("exit", (worker, code, signal) => {
//         console.error(
//             `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
//         );
//     });
// }
// else 
{

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    // use JWT auth to secure the api
    app.use(jwt());

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "*");
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        next();
    });

    routes();

    ioConnection();

    // start server
    const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
    server.listen(port, function () {
        console.log('Server listening on port ' + port);
    });
}

function routes() {
    app.use('/users', require('./Controller/users.controller'));
    app.use('/faqs', require('./Controller/faqs.controller'));
    app.use(errorHandler);
}

function ioConnection() {

    const getEvent = async socket => {
        try {
            const eventService = require('./event/event.service');
            eventService.getEventsWithInCurrentTime()
                .then((responseText) => {
                    return responseText;
                })
                .then((response) => {
                    if (response.length > 0) {
                        socket.emit(config.SocketEventFromAPI, response);
                    }
                });
        } catch (error) {
            console.error(`Error: ${error.code}`);
        }
    };

    io.on("connection", socket => {
        console.log("New Socket IO Client Connected"),
            setInterval(
                () => {
                    getEvent(socket)
                },
                10000
            );
        socket.on("disconnect", () => console.log("Socket IO Client disconnected"));
    });

    io.origins((origin, callback) => {
        if (origin !== process.env.HPS_TRADES_MAIN_APP_URL) {
            return callback('Frontend origin not allowed.', false);
        }
        callback(null, true);
    });

}

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// // use JWT auth to secure the api
// app.use(jwt());

// // api routes
// app.use('/users', require('./Controller/users.controller'));
// app.use('/faqs', require('./Controller/faqs.controller'));
// //allRoutes();

// // global error handler
// app.use(errorHandler);

// // start server
// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
// const server = app.listen(port, function () {
//     console.log('Server listening on port ' + port);
// });


// // function allRoutes(){
// //     app.use('/users', require('./Controller/users.controller'));
// //     app.use('/faqs', require('./Controller/faqs.controller'));
// // }