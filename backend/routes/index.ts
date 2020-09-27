import express, {Request, Response} from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    // 개발 redirect 용
    res.redirect('/');
});

module.exports = router;
