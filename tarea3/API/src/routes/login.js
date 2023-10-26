const router = require('express').Router();
const controller = require('./../controllers/login.controller');
const authmiddleware = require('./../middlewares/auth')
const checkRole = require('./../middlewares/role')
/**
 * @swagger
 * /login:
 *  post:
 *    sumary: User Login
 *    description: Log in a user with valid credentials.
 *    tags:
 *      - Admin
 *    
 *    responses:
 *      200:
 *        description: access granded
 *      401:
 *        description: access denied
 */
router.post('', controller.login);
/**
 * @swagger
 * /login/admin:
 *  get:
 *    sumary: Get adimin information
 *    description: Retrieves information for an admin user.
 *    tags:
 *      - Admin
 *    
 *    responses:
 *      200:
 *        description: access granded
 *      401:
 *        description: access denied
 */
router.get('/admin', authmiddleware, checkRole('admin'), controller.admin);
/**
 * @swagger
 * /login/user:
 *  get:
 *    sumary: Get user information
 *    description: Retrieves information for a user with the 'user' role.
 *    tags:
 *      - Admin
 *    
 *    responses:
 *      200:
 *        description: access granded
 *      401:
 *        description: access denied
 */
router.get('/user', authmiddleware, checkRole('user'), controller.user);
  

module.exports = router;