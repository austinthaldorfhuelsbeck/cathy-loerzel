import { useParams } from "react-router-dom"

import Events from "./Events"
import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import EventTypes from "../Components/EventTypes"

export default function EventsLayout() {
  let { type } = useParams()

  const EventsBanner = () => (
    <>
      <div className="blog-banner">
        <div className="blog-text-box">
          <h1 className="blog-header" data-aos="fade" data-aos-duration="100000">
            {type ? type : "Story Work"}
          </h1>
        </div>
      </div>
      <img
        src="https://storage.googleapis.com/cathy-loerzel-img/Cathy-blogbanner-notext.jpg"
        alt="Cathy Loerzel's Blog"
        className="image"
        style={{ width:"100%" }}
      />
    </>
  )

  const EventsHeader = ({ type }) => {
    if (type === "coaching") return (
      <div className="w-container">
        <h2>STORY WORK AND LEADERSHIP COACHING</h2>
        <p>Leading an organization, being a therapist, or running groups is difficult work that needs care and attunement to your own story as you tend to others. Cathy offers 9 coaching sessions to help you do some story work, understand where you are in your formational trajectory and gain clarity and wisdom as to your next steps in your journey toward wholeness.</p>
        <p><em>Coaching sessions: $200 with a sliding scale if needed.</em></p>
      </div>
    )
    return <></>
  }

  const EventsList = ({ type }) => {
    if (type === "coaching" || type === "intensives") {
      return <></>
    }
    if (type === "retreats" || type === "conferences") {
      return <Events type={type} />
    }
    return <Events />
  }

  return (
    <div>
      <EventsBanner />
      <EventsHeader type={type} />
      <div className="w-container upcoming-section">
        <EventsList type={type} />
      </div>
      <EventTypes />
      <NewsletterForm />
      <ProductBanner />
    </div>
  )
}