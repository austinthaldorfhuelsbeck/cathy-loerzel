const knex = require("../db/connection")

/**
 * CRUDL services for blog resources
 * Create returns a list, of which we only need the first element
 */
function list() {
  return knex("blogs as b").select("*")
}
function create(blog) {
  return knex("blogs")
    .insert(blog)
    .returning("*")
    .then((createdBlogs) => createdBlogs[0])
}
function read(id) {
  return knex("blogs as b").select("*").where({ "b.blog_id": id })
}
function update(updatedBlog, id) {
  return knex("blogs")
    .select("*")
    .where({ blog_id: id })
    .update(updatedBlog, "*")
}
function destroy(id) {}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
}
