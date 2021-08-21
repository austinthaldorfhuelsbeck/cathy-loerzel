import { useState, useEffect } from "react"
import {  Link } from "react-router-dom"

import FeaturedContent from "../Components/FeaturedContent"
import Card from "./Card"

export default function Blog({ category, topic }) {
  const [cards, setCards] = useState([])
  const [err, setErr] = useState("")

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/blogs`
    if (category) url += `?category=${category}`
    if (topic) url += `?topic=${topic}`
    fetch(url)
      .then(res => res.json())
      .then((res) => setCards(res.data))
      .catch(setErr)
  }, [category, topic])

  return (
    <div className="blog-full">
      {err}
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
  )
}