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
          <h1>STORYWORK INTENSIVES</h1>
          <br />
          <p>Each of us have origin stories that shape how we operate in our day to day lives and without an understanding of these stories - they will subconsciously lead our lives. There are reasons we feel anxious, disconnected. depressed, sad or fearful and those reasons reside in your stories of childhood harm and heartache.</p>
          <br />
          <p>None of us can escape harm and we have all adjusted our ways of relating in order to negotiate the difference between what we were meant for and what we encounter. Each life can be understood and healed - we just have to be brave enough to listen to what our bodies know but our minds are catching up to.</p>
          <br />
          <p><em><strong>Storywork Intensives</strong></em> offer a space to intentionally deep dive into your stories of heartache and trauma. Engaging your stories will help us understand more of your family of origin and its link to where you are struggling to find freedom, joy and connection in the present.</p>
          <br />
          <p>The intensive format is intended to engage your core issues quickly, but is not intended to replace regular therapeutic engagement. Please ensure you have an after-care plan in place prior to the intensive. If you are in need of a weekly therapist, please consult <a href="https://adamyoungcounseling.com/referral-list/" target="_blank" rel="noreferrer">Adam Young's referral list</a> or <a href="https://theallendercenter.org/find-a-counselor/" target="_blank" rel="noreferrer">The Allender Center's referral list</a>.</p>
          <br />
          <p>You are also welcome to sign-up for a coaching package after or before your intensive.</p>
          <br />
          <p>I offer three Intensive formats:</p>
          <ul>
            <li>Individual Intensives</li>
            <li>Group Intensives</li>
            <li>Soul/Body Intensives</li>
          </ul>
          <br />
          <h2>STORYWORK <em>GROUP</em> INTENSIVES</h2>
          <br />
          <p>Some of the most profound healing occurs in community. Storywork Group Intensives offer a chance to gather with other people and lean into our stories collectively as well as individually. Each person is invited to share one story and will receive engagement from me and the group.</p>
          <br />
          <h3>Three Day Sessions:</h3>
          <ul>
            <li>Monday 8:30am - 2:00pm</li>
            <li>Tuesday 8:30am-2:00pm</li>
            <li>Wednesday 8:30 - 12:30pm</li>
          </ul>
          <br />
          <p>5 people per group</p>
          <p><em>$1,200 a person - Price includes 1 session of follow-up care</em></p>
          <p>Location: In Seattle, or if you have a local group, I can come to you</p>
          <br />
          <h2>Storywork Individual Intensives:</h2>
          <br />
          <p>These intensives are designed to offer you one on one space to engage two stories with the gift of uninterrupted time. This will be a sacred time to focus into your past pain and begin to understand where you are stuck and how to heal from your past heartache.</p>
          <br />
          <p>We will meet in my office in Seattle. The fee for an intensive is $3,800 for individuals and $4,200 for couples. Half of the fee is required as a deposit to reserve your spot.</p>
          <br />
          <br />
          <p>An intensive is a significant investment so I offer a 30 minute video conference for us to decide if this is a good fit for you and where you are in your life. The video conference is complementary if you decide to sign up for an intensive.</p>
          <br />
          <p>Now booking winter and spring intensives - Contact me for available dates.</p>
          <br />
          <h2>Storywork Body and Soul Intensives:</h2>
          <br />
          <p>These intensives are three days in Seattle and designed to combine story and body work with the remarkable Karen Ciruli of <a href="https://www.bodyofeden.rest/" target="_blank" rel="noreferrer">Body of Eden.</a></p>
          <br />
          <p>We will do storywork, body sessions with Karen and end with a combined session together to help integrate the work.</p>
          <br />
          <p>This intensive will help us work with your whole body and help you integrate the places in your story and body that need coordinated care. Often our bodies are telling us a story we don’t yet have words for and Karen is a skilled body practitioner who will listen to your body and help you connect to the unknown. That work, combined with the care of Storywork will help you heal and reconnect your body, soul and spirit.</p>
          <br />
          <h3>Schedule:</h3>
          <p>Day 1</p>
          <ul>
            <li>8:00 - 11:00: Story Session 1</li>
            <li>12:00 - 2:00 Story Session 2</li>
          </ul>
          <br />
          <p>Day 2</p>
          <ul>
            <li>8:00 - 11:00 Body Session 1</li>
            <li>12:00 - 2:00 Story Session 3</li>
            <li>4:00 - 6:00 Body Session 2</li>
          </ul>
          <br />
          <p>Day 3</p>
          <ul>
            <li>8:00 - 12:00 Integration Session</li>
          </ul>
          <br />
          <p>We will meet in our offices in Seattle. The fee for an intensive is $4,500. Half of the fee is required as a deposit to reserve your spot.</p>
          <br />
          <p>An intensive is a significant investment so I offer a 30 minute video conference for us to decide if this is a good fit for you and where you are in your life. The video conference is complementary if you decide to sign up for an intensive.</p>
          <br />
          <p><em>Cost: $4,500</em></p>
          <p>Now booking 2023 dates, contact me for availability.</p>
          <br />
          <p>Storywork Coaching Sessions:</p>
          <br />
          <p>9 Sessions where we will work on 3 childhood narratives as well as recent vinyets.</p>
          <br />
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