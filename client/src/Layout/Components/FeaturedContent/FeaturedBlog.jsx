import Link from "react-router-dom"

export default function FeaturedBlog() {
  return (
    <div className="mb-4">
      <Link
        to={`/blog/${card.category}/${card.id}`}
        className="text-img-container"
        onClick={scrollToTop}
      >
        <img
          src={card.img}
          alt="Featured Post - Cathy Loerzel's Blog"
          className="image featured-image shadow"
          style={{ width:"100%" }}
        />
        <div className="title-link featured-text">
          <p>{card.title}</p>
        </div>
      </Link>
    </div>
  )
}