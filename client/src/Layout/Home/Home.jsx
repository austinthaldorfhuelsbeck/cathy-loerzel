import Hero from "./Hero"
import NewsletterForm from "../Components/NewsletterForm"
import About from "./About"
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
      <FeaturedBlog />
      <FeaturedContent />
      <ContactForm />
    </div>
  )
}
