import ReactPlayer from "react-player"

import ProductBanner from "../Components/ProductBanner"
import Testimonials from "./Testimonials"
import FeaturedBlog from "../Components/FeaturedContent/FeaturedBlog"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function RedeemingHeartache() {
  const videoSrc = "https://www.youtube.com/watch?v=sToxP2Q3hLM"

  return (
    <>
      <section className="rh-section">
        <ProductBanner />
        <div className="w-container">
          <ReactPlayer url={videoSrc} className="mx-auto pt-5" width="75%" />
        </div>
        <Testimonials />
      </section>
      <FeaturedBlog />
      <FeaturedContent />
    </>
  )
}