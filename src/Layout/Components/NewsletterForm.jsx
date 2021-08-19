export default function NewsletterForm() {
  return (
    <div id="newsletter-form" className="content-section wf-section">
      <div className="content-wrapper w-container">
        <div className="center-box">
          <div className="mini-title" data-aos="fade-up">
            connect with cathy<br />&amp;<br />Subscribe to her mailing list
          </div>
        </div>
      </div>
      <div className="content-wrapper w-container">
        <div className="_49-column-2">
          <div className="top-border-2 _10">
            <p data-aos="fade-up">Get promotions &amp; updates!</p>
            <div className="top-border _20">
              <div data-w-id="aeeab1da-d2d2-7ef0-22de-ce43fdd06b3c" className="form-block-2 w-form">
                <form
                  data-name="Newsletter"
                  name="wf-form-Newsletter"
                  className="flex-2"
                >
                <input
                  type="text"
                  className="text-field-2 w-input"
                  maxlength="256"
                  name="Name"
                  data-name="Name"
                  placeholder="Your name"
                  data-aos="fade-up"
                  required
                />
                <input
                  type="email"
                  className="text-field-2 _2 w-input"
                  maxlength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="Your email"
                  data-aos="fade-up"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                  data-wait="Please wait..."
                  className="submit-button-2 w-button"
                  data-aos="fade-up"
                />
                </form>
                <div className="success-message-2 w-form-done" data-aos="fade-up">
                  <div className="top-border-2">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                </div>
                <div className="error-message w-form-fail" data-aos="fade-up">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}