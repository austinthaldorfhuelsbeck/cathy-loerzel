import { useParams } from "react-router-dom"

import Events from "./Events"
import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function EventsLayout() {
  let { type } = useParams()

  const EventsBanner = () => (
    <>
      <div className="blog-banner">
        <div className="blog-text-box">
          <h1 className="blog-header" data-aos="fade" data-aos-duration="100000">
            {type ? type : ""}
          </h1>
        </div>
      </div>
      <img
        src="https://storage.googleapis.com/cathy-loerzel-img/Cathy-blogbanner-notext.jpg"
        alt="Cathy Loerzel's Blog"
        className="image"
        style={{ width:"100%" }}
      />
    </>
  )

  return (
    <div>
      <EventsBanner />
      <div className="w-container upcoming-section">
        {type ? <Events type={type} /> : <Events />}
      </div>
      <NewsletterForm />
      <FeaturedContent />
      <ProductBanner />
    </div>
  )
}