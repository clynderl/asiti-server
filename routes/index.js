const Router = require('express');
const router = new Router();
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const requestsRouter = require('./requestsRouter');

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/requests', requestsRouter);

module.exports = router;
