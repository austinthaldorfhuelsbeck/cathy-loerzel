const service = require("./testimonials.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

/**
 * Defines the controller for testimonials resources
 * Includes validation for existing and new testimonials
 * Includes list, create, read, update methods as well as
 * delete
 *
 * @type {Service}
 */

// VALIDATION
async function testimonialExists(req, res, next) {
  let id = ""
  if (req.params.testimonial_id) {
    id = req.params.testimonial_id
  } else {
    id = req.body.data.testimonial_id
  }
  const testimonialList = await service.read(id)
  const testimonial = testimonialList[0]
  if (testimonial) {
    res.locals.testimonial = testimonial
    return next()
  }
  next({
    status: 404,
    message: `Testimonial ${req.params.testimonial_id} cannot be found.`,
  })
}
