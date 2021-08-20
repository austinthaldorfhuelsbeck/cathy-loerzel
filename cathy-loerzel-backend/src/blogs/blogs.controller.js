const service = require("./blogs.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

/**
 * Defines the controller for blog resources
 * Includes validation for existing and new blogs
 * Includes list, create, read, update methods as well as
 * methods to sort and list by, create, and delete categories and topics
 *
 * @type {Service}
 */

// VALIDATION
async function blogExists(req, res, next) {
  let id = ""
  if (req.params.blog_id) {
    id = req.params.blog_id
  } else {
    id = req.body.data.blog_id
  }
  const blogsList = await service.read(id)
  const blog = blogsList[0]
  if (blog) {
    res.locals.blog = blog
    return next()
  }
  next({
    status: 404,
    message: `Blog ${req.params.blog_id} cannot be found.`,
  })
}

/**
 * Handlers for blog resources
 */
async function list(req, res) {
  const data = await service.list()
  res.json({ data })
}
async function listBlogsByCategory(req, res) {}
async function listBlogsByTopic(req, res) {}
async function create(req, res) {}
async function createCategory(req, res) {}
async function createTopic(req, res) {}
function read(req, res) {}
async function update(req, res) {}
async function destroy(req, res) {}
async function destroyCategory(req, res) {}
async function destroyTopic(req, res) {}

module.exports = {
  list: [asyncErrorBoundary(list)],
  listBlogsByCategory,
  listBlogsByTopic,
  create,
  createCategory,
  createTopic,
  read,
  update,
  destroy,
  destroyCategory,
  destroyTopic,
}
