const router = require("express").Router()
const controller = require("./newsletter.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

/**
 * Defines the router for newsletter submission resources
 *
 * @type {Router}
 */
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed)
router
  .route("/:newsletterId")
  .get(controller.read)
  .delete(controller.delete)
  .all(methodNotAllowed)

module.exports = router
