import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Testimonials() {
  return (
    <div className="testimonials-section">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="myCarousel">
          <h3>Shirley Fultz</h3>
          <h4>Designer</h4>
          <p>
            It's freeing to be able to catch up on customized news and not be
            distracted by a social media element on the same site
          </p>
        </div>
        <div className="myCarousel">
          <h3>Daniel Keystone</h3>
          <h4>Designer</h4>
          <p>
            The simple and intuitive design makes it easy for me use. I highly
            recommend Fetch to my peers.
          </p>
        </div>
        <div className="myCarousel">
          <h3>Theo Sorel</h3>
          <h4>Designer</h4>
          <p>
            I enjoy catching up with Fetch on my laptop, or on my phone when
            I'm on the go!
          </p>
        </div>
      </Carousel>
    </div>
  )
}