import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent"
import Card from "./Card"

export default function Blog() {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"

  let { category } = useParams()
  const [cards, setCards] = useState([])
  const [err, setErr] = useState(null)

  useEffect(() => {
    let url = `${API_BASE_URL}/blogs`
    if (category) url += `?category=${category}`
    fetch(url)
      .then(res => res.json())
      .then((res) => setCards(res.data))
      .catch(setErr)
  }, [API_BASE_URL, category])

  const BlogBanner = () => (
    <div className="blog-banner">
      <div className="blog-text-box">
        <h1 className="blog-header" data-aos="fade" data-aos-duration="100000">
          {category ? category : "blog"}
        </h1>
      </div>
      <img
        src="https://storage.googleapis.com/cathy-loerzel-img/Cathy-blogbanner-notext.jpg"
        alt="Cathy Loerzel's Blog"
        className="image"
        style={{ width:"100%" }}
      />
    </div>
  )

  return (
    <section id="blog" className="wf-section">
      <BlogBanner />
      {err}
      <div className="w-container">
        <FeaturedContent />
        {category ? (
          <Link to="/blog">
            <em>&larr; Back to all blogs</em>
          </Link>
        ) : ""}
        <div className="flex">
          {cards.map((card, index) => (
            <Card card={card} index={index} />
          ))}
        </div>
      </div>
      <NewsletterForm />
      <ProductBanner />
    </section>
  )
}