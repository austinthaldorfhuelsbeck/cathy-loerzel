import { Link } from "react-router-dom"

export default function FeaturedBlog() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // TEMPORARY DATA
  const card = {
    id: "calling-and-character-prophet-priest-king",
    title: "Calling & Character: Prophet, Priest, King",
    category: "podcasts",
    date: "10-9-2020",
    text: "In this episode of the podcast, Dan and Rachael are joined by Cathy Loerzel, Executive Vice President of The Allender Center, to begin a conversation about a particular aspect of The Allender Theory: prophet, priest, and king/queen. During the conversation, they invite you into each of these three categories and to consider what it means to have been given a kingdom in which you are a priest, prophet, and king/queen.",
    img: "https://cdn.theallendercenter.org/wp-content/uploads/2020/10/TACPodcast-Kingdom-BlogFI.jpg",
    audio: "https://traffic.libsyn.com/secure/theallendercenter/TAC305-PriestProphetKing1-v2.mp3",
    video: "",
    url: "https://theallendercenter.org/2020/10/calling-character-prophet-priest-king/",
    content: '<div class="the-content"><p>In this episode of the podcast, Dan and Rachael are joined by Cathy Loerzel, Executive Vice President of The Allender Center, to begin a conversation about a particular aspect of The Allender Theory: prophet, priest, and king/queen. During the conversation, they invite you into each of these three categories and to consider what it means to have been given a kingdom in which you are a priest, prophet, and king/queen.</p><h2>Quotes</h2><p>“There’s a balance between understanding what we are called to and what we are meant to take care of, versus a sense of what we are meant to rule. I think the sense of the kingdom is really the question of: What are you called to steward in your lifetime?” <strong>Cathy Loerzel</strong></p><p>“Every person who follows Jesus has been given a kingdom that is meant to be linked to the kingdom of God—it is where we get to grow human flourishing and to invite people into the larger kingdom of God.” <strong>Dr. Dan Allender</strong></p><p>“How does our personhood and our gifting and our locatedness help us have a sense of Micah 6:8—what does it mean to do justice, to love mercy, and how much humility in walking humbly with God it takes, which contends with any false notion of having a kingdom means to rule.” <strong>Rachael Clinton Chen</strong></p><p>“When I think of a kingdom I think small, the particular, and the large. I think when we start to think about it in that way God immediately gave Adam and Eve dominion over the world, but what I think God meant was a sense of look around out and figure out how to help. How can you help the world flourish?” <strong>Cathy Loerzel</strong></p><p>“We stand against all forms of indignity, all things that cause human flourishing to be impossible or far more difficult than it should be. In that sense, we deal individually, systemically, and with larger categories of saying we stand against evil and all its forms, so that’s part of the question that I love asking people. What does your kingdom stand against? What is it opposed to?” <strong>Dr. Dan Allender</strong></p><p>“I start to think through how my stories of both delight and goodness and joy but also my stories of harm and heartache have shaped my particular bent around what I’m willing to fight for, what I’m willing to fight to make right in the world and fight to put down and say absolutely no.” <strong>Cathy Loerzel</strong></p><p>“I say ‘hell no’ to the places where religious authorities, those who speak and claim to speak for God, bring all kind of violence and harm and fragmentation to the people of God and to those who do not know God, and my ‘heaven’ yes is a sense of what it looks like to get in the pit with people and to say I don’t think that’s God, and I’m wondering if we can sit together and actually wait for God to birth you anew because that birthing process is God’s work and He delights in that work.” <strong>Rachael Clinton Chen</strong></p><p>“I think I’ve built my whole kingdom out of that framework: I want to be a person and a place where belief can be acknowledged with freedom and unbelief can be acknowledged without shame or accusation, and that was prior to me naming that I have a history of past sexual abuse, but even there it is exposure of deceit, what is seen, but not addressed.” <strong>Dr. Dan Allender</strong></p><p><em>Over the next few weeks Dan, Cathy, and Rachael will be spending more time in each of these three offices and how they come to be.</em></p><h2>Resources</h2><ul><li>Listen to a podcast series with Cathy Loerzel about “<a href="https://theallendercenter.org/category/podcast/complexities-in-leadership/" target="_blank" rel="noopener noreferrer">The Complexities in Leadership</a>”</li><li>Listen to Dan and Rachael talk about “<a href="https://theallendercenter.org/2020/08/the-particulars-of-spiritual-abuse-mind-control-and-loyalty/" target="_blank" rel="noopener noreferrer">The Particulars of Spiritual Abuse</a>” on the podcast</li></ul></div>'
  }
  
  return (
    <div className="mb-4 w-container" data-aos="fade-up">
      <Link
        to={`/blog/${card.category}/${card.id}`}
        className="text-img-container"
        onClick={scrollToTop}
      >
        <img
          src={card.img}
          alt="Featured Post - Cathy Loerzel's Blog"
          className="image featured-image shadow"
          style={{ width:"100%" }}
        />
        <div className="title-link featured-text">
          <p>{card.title}</p>
        </div>
      </Link>
    </div>
  )
}