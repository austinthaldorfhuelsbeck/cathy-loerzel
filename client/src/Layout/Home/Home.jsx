import Hero from "./Hero"
import NewsletterForm from "../Components/NewsletterForm"
// import ProductBanner from "../Components/ProductBanner"
// import About from "./About"
import Events from "../Events/Events"
import ContactForm from "../Components/ContactForm"
import FeaturedBlog from "../Components/FeaturedContent/FeaturedBlog"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function Home() {  
  return (
    <div>
      <Hero />
      <Events />
      <NewsletterForm />
      {/* <ProductBanner /> */}
      {/* <About /> */}
      <ContactForm />
      <FeaturedBlog />
      <FeaturedContent />
    </div>
  )
}
