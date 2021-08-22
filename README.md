# Cathy Loerzel

This project is a single-page application designed as a personal website, a blog, and a landing page to promote Cathy Loerzel and her book, Redeeming Heartache. Its origin is as a simple frontend with basic API functionality (two contact forms).

### The current deployment is available [here](https://cathy-loerzel.vercel.app/).

## Custom API Solution

*(updated 08-19-2021)*

A custom API solution is under development for keeping track of various data throughout the site. The API needs to keep track of (at minimum) blog posts, testimonials for "Redeeming Heartache", email addresses from the subscribe form, and all the information submitted in the contact form.

### Blogs

Blogs encompass writing, podcasts, and videos of Cathy's teaching. Each blog is organized by category, and the ability to sort by topic should be added.

Blogs click through to an individual blog page, which displays the data for a single post in greater detail for the user to experience. The blog page is designed to display any of these three types of blog, and adjust what is displayed accordingly.

The blog post object is structured as follows:

- blog_id (string): PRIMARY This is parameter read by the component from the URL. Unique identifier, required, will be auto generated in dashboard form if not provided.
- title (string): (required) The unique title of the blog to be displayed.
- category (string): (required) Currently, categories are: writing, podcasts, teaching.
- topic (string): (required) A topic, to categorize the blog, used in sorting cards.
- date (date): (required) Date the content was published, MM-DD-YYYY.
- text (string): (required) The description provided for the card to display, for example the first paragraph of the blog.
- img (string): (required) The public URL for the banner image for the blog, should be 16x9.
- content (string): (required) The HTML of the full content of the post.
- audio (string): The public URL for the audio of a podcast post.
- video (string): The public URL for the video of a teaching post.
- url (string): The clickthrough link for posts which are originally hosted elsewhere.

#### Blogs - Methods and Routing

The methods and routing for the blogs section of the API is as follows:

- GET / - list all blogs
- POST / - create a new blog
- GET /category=:blog_category - list all blogs in a category
- GET /topic=:blog_topic - list all blogs of a topic
- GET /:blog_id - read a blog by ID
- PUT /:blog_id - update a blog by ID
- DELETE /:blog_id - delete a blog by ID

### Testimonials

Testimonials are used for the Redeeming Heartache landing page. A carousel cycles through cards which are populated from the database.

The testimonial object is structured as follows:

- id: (required) A unique numerical identifier.
- name: (required) First and last name of the author of the testimonial.
- title: (required) Professional title of the author of the testimonial.
- message: (required) The testimonial itself.

#### Testimonials - Methods and Routing

The methods and routing for the contact section of the API is as follows:

- GET / - list all testimonials
- GET /:testimonial_id - read a testimonial by ID
- PUT /:testimonial_id - update a testimonial
- POST / - create a new testimonial
- DELETE /:testimonial_id - delete a testimonial

### Newsletter Submissions

Responses to this form are sent to Mailchimp, but are backed up in the database.

The newsletter submission object is structured as follows:

- id: (required) A unique numerical identifier.
- email: (required) The email address of the subscriber.
- name: The full name of the subscriber.

#### Newsletter - Methods and Routing

The methods and routing for the newsletter section of the API is as follows:

- GET / - list all newsletter subscriptions
- GET /:newsletterId - read a newsletter subscription by ID
- POST / - create a new newsletter subscription
- DELETE /:newsletterId - delete a newsletter subscription

### Contact Form Submissions

Responses to this form are sent to EmailJS, but are backed up in the database.

The contact form submission object is structured as follows:

- id: (required) A unique numerical identifier.
- name: (required) The full name of the individual inquiring.
- company: The company involved in booking the event.
- phone: The phone number of the individual inquiring.
- email: (required) The email address of the individual inquiring.
- message: (required) The body of the inquiry.
- audience: A number representing the estimated audience size of the event.
- location: The location of the event.

#### Contact - Methods and Routing

The methods and routing for the contact section of the API is as follows:

- GET / - list all contacts
- GET /:contactId - read a contact by ID
- PUT /:contactId - update a contact's information
- POST / - create a new contact form submission
- DELETE /:contactId - delete a contact