const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/registration', checkRole('ADMIN'), userController.registration);
router.post('/login', userController.login);
router.get('/login', authMiddleware, userController.check);

module.exports = router;
