const router = require("express").Router()
const controller = require("./blogs.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

/**
 * Defines the router for blog resources
 *
 * @type {Router}
 */
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed)
router
  .route("/:blogId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed)
router
  .route("/:blogCategory")
  .get(controller.listBlogsByCategory)
  .post(controller.createCategory)
  .delete(controller.deleteCategory)
  .all(methodNotAllowed)
router
  .route("/:blogTopic")
  .get(controller.listBlogsByTopic)
  .post(controller.createTopic)
  .delete(controller.deleteTopic)
  .all(methodNotAllowed)

module.exports = router
