// DEPENDENCIES
if (process.env.USER) require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
// ROUTES
const blogsRouter = require("./blogs/blogs.router")

module.exports = app
