const router = require('express').Router();
const controller = require('./../controllers/user.controller');

/**
 * @swagger
 * /user:
 *  get:
 *    description: list all users in a template
 *    tags:
 *      - user
 *    responses:
 *      200:
 *        description: list all users
 *      401:
 *        description: missing or invalid user authentication key
 */
router.get('', controller.list);
/**
 * @swagger
 * /user:
 *  post:
 *    description: create a new user
 *    tags:
 *      - user
 *    parameters:
 *      - in: body
 *        name: user
 *        description: object with user information
 *        schema:
 *          type: object
 *          example:
 *            name: "Edson"
 *            lastname: "Gonzalez"
 *            email: "edson@gmail.com"
 *            password: "123456"
 *            location: "Torreon"
 *            status: "Gold"
 *            roles: ["user","admin"]
 *    responses:
 *      200:
 *        description: create user
 *      401:
 *        description: missing or invalid user authentication key
 */
router.post('', controller.create);
/**
 * @swagger
 * /user/update/{id}:
 *  put:
 *    description: update a user
 *    tags:
 *      - user
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of user to update
 *        schema:
 *          type: object
 *      - in: body
 *        name: user
 *        description: object with user information to update
 *        schema:
 *          type: object
 *          example:
 *            location: "Guadalajara"
 *    responses:
 *      200:
 *        description: User successfully updated
 *      401:
 *        description: missing or invalid user authentication key
 */
router.put('/update/:id', controller.update);
/**
 * @swagger
 * /user/delete/{id}:
 *  delete:
 *    description: delete a user
 *    tags:
 *      - user
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of user to delete
 *        schema:
 *          type: object
 *    responses:
 *      200:
 *        description: User successfully deleted
 *      401:
 *        description: missing or invalid user authentication key
 */
router.delete('/delete/:id', controller.delete);

module.exports = router;