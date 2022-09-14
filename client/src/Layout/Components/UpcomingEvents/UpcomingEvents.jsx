import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AccordionItem from "./AccordionItem"

export default function UpcomingEvents() {
  const [events, setEvents] = useState([])
  const [err, setErr] = useState("")
  const location = useLocation()

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/events`
    // console.log("URL: ", url)
    fetch(url)
      .then(res => res.json())
      .then((res) => setEvents(res.data))
      .catch(setErr)
  }, [])

  console.log(location.pathname)

  return (
    <div className="w-container upcoming-section">
      {err}
      <h3 className="lg-title">Upcoming Events</h3>
      <div className="my-5">
        {events
          .filter((event) => event.isUpcoming)
          .slice(location.pathname === "/events" ? "()" : "(0, 3)")
          .map((event) => (
            event.isUpcoming && <AccordionItem key={event.title} item={event} />
        ))}
      </div>
    </div>
  )
}