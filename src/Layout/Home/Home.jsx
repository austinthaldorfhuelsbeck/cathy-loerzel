import Hero from "./Hero"
import NewsletterForm from "../Components/NewsletterForm"
import About from "./About"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent"
import ContactForm from "../Components/ContactForm"

export default function Home() {
  return (
    <div>
      <Hero />
      <NewsletterForm />
      <ProductBanner />
      <About />
      <FeaturedContent />
      <ContactForm />
    </div>
  )
}
