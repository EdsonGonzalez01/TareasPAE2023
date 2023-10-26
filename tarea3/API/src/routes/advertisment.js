const router = require('express').Router();
const controller = require('./../controllers/advertisement.controller');

/**
 * @swagger
 * /advertisement:
 *  get:
 *    description: list all advertisement in a template
 *    tags:
 *      - advertisement
 *    responses:
 *      200:
 *        description: list all advertisement
 *      401:
 *        description: missing or invalid user authentication key
 */
router.get('', controller.list);
/**
 * @swagger
 * /advertisement:
 *  post:
 *    description: create a new advertisement
 *    tags:
 *      - advertisement
 *    parameters:
 *      - in: body
 *        name: advertisement
 *        description: object with advertisement information
 *        schema:
 *          type: object
 *          example:
 *            title: "New advertisement"
 *            description: "Description of advertisement"
 *            status: "In offer"
 *            date: "2023-12-12"
 *            user: "EdsonGlz"
 *    responses:
 *      200:
 *        description: create advertisement
 *      401:
 *        description: missing or invalid user authentication key
 */
router.post('', controller.create);
/**
 * @swagger
 * /advertisement/update/{id}:
 *  put:
 *    description: update a advertisement
 *    tags:
 *      - advertisement
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of advertisement to update
 *        schema:
 *          type: object
 *      - in: body
 *        name: advertisement
 *        description: object with advertisement information to update
 *        schema:
 *          type: object
 *          example:
 *            status: "Available"
 *    responses:
 *      200:
 *        description: Advertisement successfully updated
 *      401:
 *        description: Missing or invalid user authentication key
 *      404:
 *        description: Advertisement not found
 */
router.put('/update/:id', controller.update);
/**
 * @swagger
 * /advertisement/delete/{id}:
 *  delete:
 *    description: delete a advertisement
 *    tags:
 *      - advertisement
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of advertisement to delete
 *        schema:
 *          type: object
 *    responses:
 *      200:
 *        description: Advertisement successfully deleted
 *      401:
 *        description: Missing or invalid user authentication key
 *      404:
 *        description: Advertisement not found
 */
router.delete('/delete/:id', controller.delete);

module.exports = router;