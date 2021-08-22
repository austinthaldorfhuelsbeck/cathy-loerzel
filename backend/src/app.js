// DEPENDENCIES
if (process.env.USER) require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
// ROUTES
const blogsRouter = require("./blogs/blogs.router")
const testimonialsRouter = require("./testimonials/testimonials.router")
// const newsletterRouter = require("./newsletter/newsletter.router.js")
// const contactRouter = require("./contact/contact.router.js")
// ERROR HANDLERS
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")

app.use(cors())
app.use(express.json())

// Route handlers
app.use("/blogs", blogsRouter)
// app.use("/testimonials", testimonialsRouter)
// app.use("/newsletter", newsletterRouter)
// app.use("/contact", contactRouter)

// Error handlers
app.use(notFound)
app.use(errorHandler)

module.exports = app
