import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export default function AccordionItem({ item }) {
  const [isActive, setIsActive] = useState(false)
  // Active on Events page by default
  const history = useHistory()
  useEffect(() => {
    if (history.location.pathname === "/events") setIsActive(true)
  }, [history])

  const flipIsActive = () => setIsActive(!isActive)

  return (
    <div className="">
      <div className="accordion-title" onClick={flipIsActive}>
        <h2>{item.name}</h2>
        <h2 className="mx-4">{item.date}</h2>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <>
          <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
          <a href={item.url} target="_blank" rel="noreferrer">
            <button className="button w-button">Learn More</button>
          </a>
        </>
      )}
    </div>
  )
}
