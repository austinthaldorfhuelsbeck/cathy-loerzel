// import { useState } from "react"
import { Accordion } from "react-bootstrap"

import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function Events() {
  // const [events, setEvents] = useState([])
  let events = [
    {
      title: "Redeeming Heartache Virtual Conference",
      date: "September 18, 2021",
      text: "<p><em>Come discover healthy and hopeful pathways to address pain, and direction towards a fulfilling future.</em></p><p>Redeeming Heartache is a one day, online event taught by authors and trauma specialists Dr. Dan Allender and Cathy Loerzel, MA, in conjunction with the release of their brand new book.</p><p>Learn how heartache of the past can become a springboard for a more hopeful future as you learn to embrace your calling. You will gain understanding of why you feel the way you do, and how your coping strategies may be creating a false sense of health. Dan and Cathy will explore major themes from their new book, Redeeming Heartache, that lead to true connection and healing with ourselves, God, and others.</p>"
    },
    {
      title: "one",
      date: "two"
    }
  ]
  // setEvents(data)

  // const eventsTable = events.map((event) => (
  //   <Accordion.Item>
  //     <Accordion.Header>{event.title}</Accordion.Header>
  //     <Accordion.Body>{event.date}</Accordion.Body>
  //   </Accordion.Item>
  // ))

  return (
    <div>
      <img
        src="https://cdn.theallendercenter.org/wp-content/uploads/2016/02/intimate-mystery-banner-1600x350.jpg"
        alt="Intimate Mystery"
        className="image-blog"
      />
      <div className="w-container">
        <h3 className="lg-title">Upcoming Events</h3>
      </div>
      {/* <Accordion defaultActiveKey="0" flush>{eventsTable}</Accordion> */}
      <NewsletterForm />
      <FeaturedContent />
      <ProductBanner />
    </div>
  )
}