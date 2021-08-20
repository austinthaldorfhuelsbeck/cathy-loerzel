import ProductBanner from "../Components/ProductBanner"
import Testimonials from "./Testimonials"

export default function RedeemingHeartache() {
  return (
    <section className="rh-section">
      <h1 className="h1-redeeming my-5" data-aos="fade">Redeeming <em>Heartache</em></h1>
      <ProductBanner />
      <Testimonials />
    </section>
  )
}