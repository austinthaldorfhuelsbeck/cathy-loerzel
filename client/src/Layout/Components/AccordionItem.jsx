import { useState } from "react"

export default function AccordionItem({ item }) {
  const [isActive, setIsActive] = useState(false)

  const flipIsActive = () => setIsActive(!isActive)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={flipIsActive}>
        <div>{item.title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.text }}></div>
      )}
    </div>
  )
}