import { useParams } from "react-router-dom"

import Blog from "./Blog"
import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"

export default function BlogPage() {
  let { category, topic, id } = useParams()

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

  const BlogPost = () => <div>BLOG POST</div>

  return (
    <section id="blog">
      <BlogBanner />
      <div className="w-container">
        {id ? <BlogPost id={id} /> : <Blog category={category} topic={topic} />}
      </div>
      <NewsletterForm />
      <ProductBanner />
    </section>
  )
}