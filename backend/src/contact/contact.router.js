const router = require("express").Router()
const controller = require("./contact.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

/**
 * Defines the router for contact form response resources
 *
 * @type {Router}
 */
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed)
router
  .route("/:contactId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed)

module.exports = router
