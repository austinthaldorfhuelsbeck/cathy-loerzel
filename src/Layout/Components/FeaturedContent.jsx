import { Link } from "react-router-dom"
import data from "../../data/data"

export default function FeaturedContent() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const FeaturedBlog = ({ card }) => (
    <div className="mb-4">
      <Link
        to={`/blog/${card.category}/${card.id}`}
        className="text-img-container"
      >
        <img
          src={card.img}
          alt="Featured Post - Cathy Loerzel's Blog"
          className="image featured-image shadow"
          style={{ width:"100%" }}
        />
        <div className="title-link featured-text">
          <h1 className="mx-auto">{card.title}</h1>
        </div>
      </Link>
    </div>
  )
  
  return (
    <section id="visual-nav" className="cards-section wf-section">
      <h1 className="heading-6">Featured Content</h1>
      <FeaturedBlog card={data[0]}/>
      <div className="w-container" data-aos="fade-up">
        <div className="flex-center">
          <div className="intro-box">
            <div className="intro-text-box">
              <Link to="/blog/writing" className="title-link" onClick={scrollToTop}>Writing</Link>
              <div className="top-border _5">
                <Link to="/blog/writing" className="text-link" onClick={scrollToTop}>Blog posts and more...</Link>
              </div>
            </div>
          </div>
          <div className="intro-box-alt1">
            <div className="intro-text-box">
              <Link to="/blog/podcasts" className="title-link" onClick={scrollToTop}>Podcasts</Link>
              <div className="top-border _5">
                <Link to="/blog/podcasts" className="text-link" onClick={scrollToTop}>Features and guest appearances</Link>
              </div>
            </div>
          </div>
          <div className="intro-box-alt2 no-border">
            <div className="intro-text-box">
              <Link to="/blog/teaching" className="title-link" onClick={scrollToTop}>Teaching</Link>
              <div className="top-border _5">
                <Link to="/blog/teaching" className="text-link" onClick={scrollToTop}>Recorded lectures and teaching</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}