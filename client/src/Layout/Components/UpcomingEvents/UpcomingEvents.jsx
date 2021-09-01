import AccordionItem from "./AccordionItem"

export default function UpcomingEvents() {
  let events = [
    {
      title: "Redeeming Heartache Virtual Conference",
      date: "September 18, 2021",
      text: "<p><em>Come discover healthy and hopeful pathways to address pain, and direction towards a fulfilling future.</em></p><p>Redeeming Heartache is a one day, online event taught by authors and trauma specialists Dr. Dan Allender and Cathy Loerzel, MA, in conjunction with the release of their brand new book.</p><p>Learn how heartache of the past can become a springboard for a more hopeful future as you learn to embrace your calling. You will gain understanding of why you feel the way you do, and how your coping strategies may be creating a false sense of health. Dan and Cathy will explore major themes from their new book, Redeeming Heartache, that lead to true connection and healing with ourselves, God, and others.</p>"
    },
    {
      title: "Intimate Mystery",
      date: "October 1-2, 2021",
      text: `<p>Join <a href="https://theallendercenter.org/about/team/dan-allender/" target="_blank" rel="noopener noreferrer">Dr. Dan B. Allender</a> and <a href="https://theallendercenter.org/about/team/cathy-loerzel/" target="_blank" rel="noopener noreferrer">Cathy Loerzel,</a> co-founder of The Allender Center, to explore God’s design for marriage through the matrix of Genesis 2:24 (leaving, weaving, and cleaving). Be moved toward deeper intimacy as you encounter the character and purposes of God revealed through the complexities of your unique relationship.</p><blockquote><p>My wife and I believe this to be the best marriage conference we’ve ever attended in 35 years of marriage and “Christian” effort to do it right.  It is serving to bring us hope through the reality of life and not the empty promises of how to do it better, try harder, or be more faithful. — <em>Intimate Mystery attendee</em></p></blockquote><p>Dan and Cathy lead the conversation with their own vulnerability and challenge couples to lean into their vulnerability, resulting in an experience that moves the conversation on life-giving marriages and relationships beyond techniques and “how-to’s.” Instead, Dan and Cathy invite you into a place of newfound awareness and ability to engage conflict and desire—as an individual and as a couple.</p><blockquote><p>I am single and have never been married.  I feel like hearing this information now is so helpful.  It will help me as I work through my story and it will also change the way I’m dating. — <em>Intimate Mystery attendee</em></p></blockquote><p>Intimate Mystery is a conference centered on understanding and developing healthy intimacy, and is applicable to both couples and singles, to those who want to engage Scripture in a provocative, meaningful way, and to those who desire a deeper faith and deeper relationships with others and God.</p>`
    }
  ]

  return (
    <div className="w-container">
      <h3 className="lg-title">Upcoming Events</h3>
      <div className="accordion">
        {events.map((event) => (
          <AccordionItem key={event.title} item={event} />
        ))}
      </div>
    </div>
  )
}