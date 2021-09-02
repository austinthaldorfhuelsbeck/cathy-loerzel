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
    <div className="accordion-item">
      <div className="accordion-title" onClick={flipIsActive}>
        <div>{item.title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <>
          <h2 className="mx-4">{item.date}</h2>
          <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.text }}></div>
        </>
      )}
    </div>
  )
}