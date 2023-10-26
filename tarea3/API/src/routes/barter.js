const router = require('express').Router();
const controller = require('./../controllers/barter.controller');

/**
 * @swagger
 * /barter:
 *  get:
 *    description: list all barters in a template
 *    tags:
 *      - barter
 *    responses:
 *      200:
 *        description: list all barters
 *      401:
 *        description: missing or invalid user authentication key
 */
router.get('', controller.list);
/**
 * @swagger
 * /barter:
 *  post:
 *    description: create a new barter
 *    tags:
 *      - barter
 *    parameters:
 *      - in: body
 *        name: barter
 *        description: object with barter information
 *        schema:
 *          type: object
 *          example:
 *            title: "New Barter"
 *            description: "Description of Barter"
 *            status: "In offer"
 *            date: "2023-12-12"
 *            user: "EdsonGlz"
 *    responses:
 *      200:
 *        description: create barter
 *      401:
 *        description: missing or invalid user authentication key
 */
router.post('', controller.create);
/**
 * @swagger
 * /barter/update/{id}:
 *  put:
 *    description: update a barter
 *    tags:
 *      - barter
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of barter to update
 *        schema:
 *          type: object
 *      - in: body
 *        name: barter
 *        description: object with barter information to update
 *        schema:
 *          type: object
 *          example:
 *            status: "Completed"
 *    responses:
 *      200:
 *        description: Barter successfully updated
 *      401:
 *        description: missing or invalid user authentication key
 *      404:
 *        description: Barter not found
 */
router.put('/update/:id', controller.update);
/**
 * @swagger
 * /barter/delete/{id}:
 *  delete:
 *    description: delete a barter
 *    tags:
 *      - barter
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of barter to delete
 *        schema:
 *          type: object
 *    responses:
 *      200:
 *        description: Barter successfully deleted
 *      401:
 *        description: missing or invalid user authentication key
 *      404:
 *        description: Barter not found
 */
router.delete('/delete/:id', controller.delete);

module.exports = router;