import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer wf-section">
      <div className="content-wrapper w-container">
        <div className="flex-space">
          <div className="_90-column">
            <div className="footer-links">
              <Link to="/" className="footer-link" onClick={scrollToTop}>Home</Link>
              <br />
              <Link to="/about" className="footer-link" onClick={scrollToTop}>About</Link>
              <br />
              <Link to="/blog" className="footer-link" onClick={scrollToTop}>Blog</Link>
              <Link to="/blog/writing" className="footer-link-alt" onClick={scrollToTop}>&#10551;Writing</Link>
              <Link to="/blog/podcasts" className="footer-link-alt" onClick={scrollToTop}>&#10551;Podcasts</Link>
              <Link to="/blog/teaching" className="footer-link-alt" onClick={scrollToTop}>&#10551;Teaching</Link>
              <br />
              <Link to="/redeeming-heartache" className="footer-link" onClick={scrollToTop}>Redeeming Heartache</Link>
              <br />
              <Link to="/events" className="footer-link" onClick={scrollToTop}>Events</Link>
              <Link to="/events/retreats" className="footer-link-alt" onClick={scrollToTop}>&#10551;Retreats</Link>
              <Link to="/events/conferences" className="footer-link-alt" onClick={scrollToTop}>&#10551;Conferences</Link>
              <Link to="/events/coaching" className="footer-link-alt" onClick={scrollToTop}>&#10551;Coaching</Link>
              <Link to="/events/intensives" className="footer-link-alt" onClick={scrollToTop}>&#10551;Intensives</Link>
              <br />
              <Link to="/contact" className="footer-link" onClick={scrollToTop}>Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer-notice">
          <div className="footer-notice-box"></div>
          <div className="to-top w-hidden-medium w-inline-block" onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></div>
        </div>
      </div>
    </footer>
  )
}