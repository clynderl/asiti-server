const Router = require('express');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');
const requestsController = require('../controllers/requestsController');

router.post('/', requestsController.create);
router.get('/', checkRole('ADMIN'), requestsController.getAll);


module.exports = router;
