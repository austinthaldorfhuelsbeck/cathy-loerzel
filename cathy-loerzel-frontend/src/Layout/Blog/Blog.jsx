import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent"
import BlogPost from "./BlogPost"
import Card from "./Card"

import data from "../../data/data"

export default function Blog() {
  let { category, id } = useParams()
  const [cards, setCards] = useState(data)

  useEffect(() => {
    if (category) setCards(data.filter((card) => card.category === category))
    if (id) setCards(data.filter((card) => card.id === id))
    if (!category && !id) setCards(data)
    console.log("Category:", category)
    console.log("Id:", id)
    console.log("Cards Length:", cards.length)
  }, [category, id, cards.length])

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
      {id ?
        <div className="w-container">
          <h1 className="title">{cards[0].title}</h1>
          <BlogPost card={cards[0]} />
          <FeaturedContent />
        </div>
        :
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
      }
      <NewsletterForm />
      <ProductBanner />
    </section>
  )
}