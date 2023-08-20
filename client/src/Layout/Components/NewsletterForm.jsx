import { useFormFields, useMailChimpForm } from "use-mailchimp-form"

export default function NewsletterForm() {
  const url = "https://gmail.us5.list-manage.com/subscribe/post?u=07d928836c4bfc5f2ac3958b0&amp;id=da7fe51007"
  const {
    loading,
    error,
    success,
    message,
    handleSubmit
  } = useMailChimpForm(url)
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
    NAME: ""
  })

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
            <div className="form-block-2">
            <form
              onSubmit={event => {
                event.preventDefault();
                handleSubmit(fields);
              }}
            >
              <input
                id="EMAIL"
                placeholder="email"
                size="150"
                autoFocus
                type="email"
                value={fields.EMAIL}
                className="input"
                onChange={handleFieldChange}
              />
              <input
                id="NAME"
                placeholder="your name"
                size="150"
                autoFocus
                type="email"
                value={fields.NAME}
                className="input"
                onChange={handleFieldChange}
              />
              <button>Subscribe!</button>
            </form>
            {loading && "submitting"}
            {error && message}
            {success && message}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}