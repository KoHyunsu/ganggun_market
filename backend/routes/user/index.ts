import express, {NextFunction, Request, Response} from 'express';
import upload from '../../config/upload'
const router = express.Router();
// import auth '../../config/authentication.js';

const {
    sayHello,
    uploadTest
} = require('./user');

router.get('/say', sayHello);
router.get('/upload', upload, uploadTest);
// router.post('/deleteUser', (req, res, next) => auth(req, res, next, 3), deleteUser);
//router.delete('/user/:id', (req, res, next) => auth(req, res, next, 3), deleteUser);
//router.post('/grantPresenter', (req, res, next) => auth(req, res, next, 3), grantPresenter);
//router.put('/level', (req, res, next) => auth(req, res, next, 3), changeLevel);
//router.put('/password', (req, res, next) => auth(req, res, next, 3), changePW);
//router.put('/applications', (req, res, next) => auth(req, res, next, 3), getApplications);
module.exports = router;
