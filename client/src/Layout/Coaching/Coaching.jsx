import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function Coaching() {
  return (
    <div>
      <img
        src="https://cdn.theallendercenter.org/wp-content/uploads/2016/02/story-workshop-banner-1600x350.jpg"
        alt="Dan Allender at church"
        className="image-blog"
      />
      <div className="w-container">
        <h1>Work with Cathy</h1>
        <h2>Intensives</h2>
        <p>Depending on her schedule and availability, Cathy can meet with you in an intensive format to do work on your stories of heartache and trauma. These can either be in person or in virtual format. They consist of 12 hours of sessions over 2 days. She can meet with an individual, group, or couple.</p>
        <h2>Leadership and Formational Coaching</h2>
        <p>Leading an organization, being a therapist, or running groups is difficult work that needs care and attunement to your own story as you tend to others. Cathy offers 6 coaching sessions to help you do some story work, understand where you are in your formational trajectory and gain clarity and wisdom as to your next steps.</p>
        <h2>Retreats</h2>
        <p>Cathy is in the process of designing retreats that combine story and trauma work as well as body work and prayer/spiritual healing. If you are interested in bringing her in to run a retreat for your community, she would love to collaborate with you.</p>
        <h2>Speaking/Teaching</h2>
        <p>Cathy is available to speak to your community, church, or organization. She teaches on trauma, story and healing, spiritual warfare, and her hallmark model called the “U-Diagram” on the trajectory of healing the human heart.</p>
      </div>
      <NewsletterForm />
      <FeaturedContent />
      <ProductBanner />
    </div>
  )
}