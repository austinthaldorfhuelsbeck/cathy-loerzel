import ProductBanner from "../Components/ProductBanner"
import Testimonials from "./Testimonials"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function RedeemingHeartache() {
  return (
    <>
      <section className="rh-section">
        <ProductBanner />
        <Testimonials />
      </section>
      <FeaturedContent />
    </>
  )
}