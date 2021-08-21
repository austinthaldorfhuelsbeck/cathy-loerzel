import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function BlogPost({ id }) {
  const [card, setCard] = useState({})
  const [err, setErr] = useState("")

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/blogs/${id}`
    fetch(url)
      .then(res => res.json())
      .then((res) => setCard(res.data))
      .catch(setErr)
  }, [id])

  const PodcastAside = () => (
    <aside className="center-box">
      <audio
        preload="none"
        controls="controls"
      >
        <source
          type="audio/mpeg"
          src={card.audio}
        />
        <a href={card.audio}>
          {card.audio}
        </a>
      </audio>
      <br />
      <br />
      <a
        className="button"
        href="https://itunes.apple.com/us/podcast/the-allender-center-podcast/id936250143"
        target="_blank" rel="noreferrer"
      >
        iTunes
      </a>
      <a
        className="button"
        href="http://www.stitcher.com/podcast/the-seattle-school/the-allender-center-podcast?refid=stpr"
        target="_blank" rel="noreferrer"
      >
        Stitcher
      </a>
      <br />
      <br />
      <a
        className="button"
        href="http://theallendercenter.libsyn.com/rss"
        target="_blank" rel="noreferrer"
      >
        RSS
      </a>
      <a
        className="button"
        href="http://traffic.libsyn.com/theallendercenter/TAC171_Story_Sage_Part_Three.mp3"
        target="_blank"
        download rel="noreferrer"
      >
        Download
      </a>
    </aside>
  )

  const Signature = () => (
    <img
      src="https://storage.googleapis.com/cathy-loerzel-img/cathy-loerzel-signature.png"
      alt="Cathy Loerzel"
      className="signature"
    />
  )

  return (
    <div className="blog-post">
      {err}
      <h1>{card.title}</h1>
      <Link to={`/blog/${card.category}`}>
        <em>&larr; Back to all {card.category}</em>
      </Link>
      <h5>Published on {card.date && card.date.slice(0, 10)}</h5>
      <div className="row">
        <a href={card.url} target="_blank" rel="noreferrer">
          <img
            src={card.img}
            alt={card.title}
            className="image-blog"
          />
        </a>
        {card.audio && <PodcastAside />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: card.content }} />
      {card.category === "writing" && <Signature />}
    </div>
  )
}