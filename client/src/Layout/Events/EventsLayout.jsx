import { useParams } from "react-router-dom"

import Events from "./Events"
import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import EventTypes from "../Components/EventTypes"
import ContactForm from "../Components/ContactForm"

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
      <>
        <div className="w-container">
          <h2>STORY WORK AND LEADERSHIP COACHING</h2>
          <p>Leading an organization, being a therapist, or running groups is difficult work that needs care and attunement to your own story as you tend to others. Cathy offers 9 coaching sessions to help you do some story work, understand where you are in your formational trajectory and gain clarity and wisdom as to your next steps in your journey toward wholeness.</p>
          <p><em>Coaching sessions: $200 with a sliding scale if needed.</em></p>
        </div>
        <ContactForm type={type} />
      </>
    )
    if (type === "intensives") return (
      <>
        <div className="w-container">
          <h2>INTENSIVES</h2>
          <p>Intensives are an opportunity for you to go deeper into your own story and continue your journey into understanding how your past pain impacts the way you currently interact with yourself and with the world.</p>
          <p>During an intensive, Cathy will work with two of your stories and help unpack themes and underlying parts of your story that will help move you toward more freedom and joy.</p>
          <p>An intensive consists of 2 days from 8am - 2pm.  These sessions take place in her office in Seattle, WA. She can meet with an individual, group, or couple and is currently booking fall and spring sessions.</p>
          <p><em>Intensives: $4,000 with a sliding scale if needed.</em></p>
        </div>
        <ContactForm type={type} />
      </>
    )
    if (type === "retreats") return (
      <div className="w-container">
        <h2>RETREATS</h2>
        <p>Cathy is in the process of designing retreats that combine story and trauma work as well as body work and prayer/spiritual healing. If you are interested in bringing her in to run a retreat for your community, she would love to collaborate with you.</p>
      </div>
    )
    if (type === "conferences") return (
      <div className="w-container">
        <h2>CONFERENCES</h2>
        <p>Cathy is available to speak to your community, church, or organization. She teaches on the Orphan, Widow, Stranger content found in Redeeming Heartache in depth.</p>
        <p>She also teaches on trauma, story and healing, spiritual warfare, and her hallmark model called the “U-Diagram” on the trajectory of healing the human heart.</p>
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
      <EventsList type={type} />
      <EventTypes />
      <NewsletterForm />
      <ProductBanner />
    </div>
  )
}