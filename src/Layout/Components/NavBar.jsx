import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function NavBar() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      data-collapse="medium"
      data-animation="over-left"
      data-duration="400"
      id="Top" role="banner"
      className="w-nav"
    >
      <div className="content-wrapper w-container">
        <Link to="/">
          <img
            src="https://storage.googleapis.com/cathy-loerzel-img/cathy-loerzel-signature.png"
            alt="Cathy Loerzel"
            className="signature"
          />
        </Link>
        <nav role="navigation" className="w-nav-menu">
          <HashLink to="/#about" className="nav-link w-nav-link">About</HashLink>
          <Link to="/blog" className="nav-link w-nav-link" onClick={scrollToTop}>Blog</Link>
          <Link to="/coaching" className="nav-link w-nav-link" onClick={scrollToTop}>Coaching</Link>
          <Link to="/redeeming-heartache" className="nav-link w-nav-link" onClick={scrollToTop}>Redeeming Heartache</Link>
          <Link to="/contact" className="nav-link w-nav-link" onClick={scrollToTop}>Contact</Link>
        </nav>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  )
}