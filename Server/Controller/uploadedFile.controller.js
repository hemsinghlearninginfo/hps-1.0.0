var express = require('express');
//var Image = require('../models/image');
var ImageRouter = express.Router();
const multer = require('multer');

const db = require('_helpers/db');
const UploadedFileDb = db.UploadedFile;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

/* 
    stores image in uploads folder
    using multer and creates a reference to the 
    file
*/
ImageRouter.route("/uploadmulter")
    .post(upload.single('imageData'), (req, res, next) => {
        console.log(req.body);
        const newImage = new UploadedFileDb({
            imageName: req.body.imageName,
            imageData: req.file.path
        });

        newImage.save()
            .then((result) => {
                console.log(result);
                res.status(200).json({
                    success: true,
                    document: result
                });
            })
            .catch((err) => next(err));
    });

/*
    upload image in base64 format, thereby,
    directly storing it in mongodb datanase
    along with images uploaded using firebase
    storage
*/    
ImageRouter.route("/uploadbase")
    .post((req, res, next) => {
        const newImage = new UploadedFileDb({
            imageName: req.body.imageName,
            imageData: req.body.imageData
        });

        newImage.save()
            .then((result) => {
                res.status(200).json({
                    success: true,
                    document: result
                });
            })
            .catch((err) => next(err));
    });

module.exports = ImageRouter;


// const express = require('express');
// const router = express.Router();
// const uploadedFileService = require('../Service/uploadedFile.service');

// // routes
// router.get('/', getAll);
// router.get('/:id', getById);
// router.post('/create', create);
// router.put('/:id', update);
// router.delete('/:id', _delete);
// // router.post('/register', register);
// // router.get('/current', getCurrent);
// // router.get('/:id', getById);
// // router.put('/:id', update);
// // 

// module.exports = router;

// function getAll(req, res, next) {
//     uploadedFileService.getAll()
//         .then(faqs => { res.json(faqs) })
//         .catch(err => { next(err) });
// }

// function getById(req, res, next) {
//     uploadedFileService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function create(req, res, next) {
//     uploadedFileService.create(req.body)
//         .then(() => res.json({}))
//         .catch(err => { next(err); });
// }

// function update(req, res, next) {
//     uploadedFileService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     uploadedFileService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }
