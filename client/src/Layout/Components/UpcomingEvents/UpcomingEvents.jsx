import { useState, useEffect } from "react"
import AccordionItem from "./AccordionItem"

export default function UpcomingEvents() {
  const [events, setEvents] = useState([])
  const [err, setErr] = useState("")

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/events`
    console.log("URL: ", url)
    fetch(url)
      .then(res => res.json())
      .then((res) => setEvents(res.data))
      .catch(setErr)
  }, [])

  return (
    <div className="w-container upcoming-section">
      {err}
      {console.log("EVENTS: " + events[0])}
      <h3 className="lg-title">Upcoming Events</h3>
      <div className="my-5">
        {events.slice(0,3).map((event) => (
          <AccordionItem key={event.title} item={event} />
        ))}
      </div>
    </div>
  )
}