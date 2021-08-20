const router = require("express").Router()
const controller = require("./contact.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

/**
 * Defines the router for contact form response resources
 *
 * @type {Router}
 */
