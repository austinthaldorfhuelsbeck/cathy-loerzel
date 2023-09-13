import React from 'react'
import ContactForm from '../../Components/ContactForm'

export default function Coaching() {
  const headerImgURL = "https://storage.googleapis.com/cathy-loerzel-img/F2FF90A9-7B8E-4D97-BA3D-3769639AF386_1_105_c.jpeg"

  return (
    <>
      <div className="n-container">
        <h1 className="h1-redeeming-alt">StoryWork Coaching</h1>
        <h1 className="mini-title align-center">Healing Day by Day</h1>
      </div>
      <div className="n-container">
        <div className="row-10 py-3">
          <p>Weekly StoryWork Coaching where we will engage your family of origin, trauma stories and begin understanding <em>where</em> trauma is lodged in your body <em><strong>and how to heal.</strong></em></p>
          <br />
          <p><a href="#contact-form">Contact Cathy</a> to set up a 25 min consultation to see if this path is right for you.</p>
          <br />
          <p><em>Each hour session is $200 with a sliding scale if needed. Insurance does not cover storywork coaching.</em></p>
        </div>
      </div>
      <div className="n-container">
        <h1 className="h1-redeeming-alt">Leadership Coaching</h1>
        <h1 className="mini-title align-center">Taking the Time You Need</h1>
      </div>
      <div className="n-container">
        <div className="row-10 py-3 align-right">
          <p>Leading an organization, being a therapist, or running groups is difficult work that needs care and attunement to <em><strong>your own story</strong></em> as you tend to others.</p>
          <br />
          <p>Cathy offers coaching sessions to help you do some story work, understand where you are in your formational trajectory and gain clarity and wisdom as to your next steps in your journey toward wholeness.</p>
          <br />
          <p><a href="#contact-form">Reach out today.</a></p>
          <br />
          <p><em>Each hour session is $200 with a sliding scale if needed. Insurance does not cover storywork coaching.</em></p>
        </div>
      </div>

      <img
        src={headerImgURL}
        alt="Sunset on lake"
        className="image-banner"
        style={{ opacity:"85%" }}
      />

      <ContactForm type="coaching" />
    </>
  )
}
