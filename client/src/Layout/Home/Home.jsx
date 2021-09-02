import Hero from "./Hero"
import NewsletterForm from "../Components/NewsletterForm"
import About from "./About"
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"
import FeaturedBlog from "../Components/FeaturedContent/FeaturedBlog"
import ContactForm from "../Components/ContactForm"

export default function Home() {  
  return (
    <div>
      <Hero />
      <NewsletterForm />
      <ProductBanner />
      <About />
      <UpcomingEvents />
      <ContactForm />
      <FeaturedBlog />
      <FeaturedContent />
    </div>
  )
}
