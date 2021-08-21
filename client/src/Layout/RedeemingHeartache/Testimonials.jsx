import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import testimonials from "../../data/testimonials"

export default function Testimonials() {
  return (
    <div className="testimonials-section">
      <h1 className="h1-redeeming-alt" data-aos="fade">Praise for</h1>
      <h1 className="h1-redeeming mb-5">Redeeming <em>Heartache</em></h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={16100}
      >
        {testimonials.map((testimonial, index) => (
          <div className="myCarousel">
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}