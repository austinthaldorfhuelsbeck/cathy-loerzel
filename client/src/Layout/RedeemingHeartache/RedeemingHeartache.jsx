import ProductBanner from "../Components/ProductBanner"
import Testimonials from "./Testimonials"
import FeaturedBlog from "../Components/FeaturedContent/FeaturedBlog"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function RedeemingHeartache() {
  return (
    <>
      <section className="rh-section">
        <ProductBanner />
        <Testimonials />
      </section>
      <FeaturedBlog />
      <FeaturedContent />
    </>
  )
}