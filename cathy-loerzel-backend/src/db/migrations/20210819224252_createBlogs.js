exports.up = function (knex) {
  return knex.schema.createTable("blogs", (table) => {
    table.string("blog_id").primary()
    table.string("title")
    table.string("category")
    table.string("topic")
    table.date("date")
    table.string("text", 1024)
    table.string("img")
    table.string("content")
    table.string("audio")
    table.string("video")
    table.string("url")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("blogs")
}
