import { Link } from "react-router-dom"

export default function Card({ card, index }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Link
      to={`/blog/${card.category}/${card.blog_id}`}
      className="grow"
      key={index}
      onClick={scrollToTop}
    >
      <div className="card" style={{ width: '18rem' }} data-aos="fade">
        <img src={card.img} className="card-img-top" alt={card.title} />
        <div className="card-body">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-text text-link-3">
            {card.text && (
              card.text.length < 250 ? card.text : card.text.slice(0, 250) + "..."
            )}
          </p>
        </div>
      </div>
    </Link>
  )
}