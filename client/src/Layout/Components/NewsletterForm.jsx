import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from "./CustomForm"

export default function NewsletterForm() {
  const postURL = "https://gmail.us5.list-manage.com/subscribe/post?u=07d928836c4bfc5f2ac3958b0&amp;id=da7fe51007"

  return (
    <div id="newsletter-form" className="content-section wf-section">
      <div className="content-wrapper w-container">
        <div className="center-box">
          <div className="mini-title" data-aos="fade-up">
            Connect with Cathy<br />&amp;<br />Subscribe to her mailing list
          </div>
        </div>
      </div>
      <div className="content-wrapper w-container">
        <div className="_49-column-2">
          <div className="top-border-2 _10">
            <div className="form-block-2">
              <MailchimpSubscribe
                url={postURL}
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}