import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AccordionItem from "../Components/AccordionItem"
import { Link } from "react-router-dom"

export default function Events({ type }) {
  const [events, setEvents] = useState([])
  const [err, setErr] = useState("")
  const location = useLocation()

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/events`
    if (type) url += `?type=${type}`
    fetch(url)
      .then(res => res.json())
      .then((res) => setEvents(res.data))
      .catch(setErr)
  }, [type])

  const capitalizeFirstLetter = (string) => (
    string.charAt(0).toUpperCase() + string.slice(1)
  )

  const filteredEvents = events
  .filter((event) => event.isUpcoming)
  .slice(location.pathname === "/events" ? "()" : "(0, 3)")
  .map((event) => (
    event.isUpcoming && <AccordionItem key={event.title} item={event} />
  ))

  return (
    <>
      {err}
      <h3 className="lg-title">Upcoming {type ? capitalizeFirstLetter(type) : "Events"}</h3>
      {type ? (
        <Link to="/events">
          <em>&larr; Back to all events</em>
        </Link>
      ) : ""}
      <div className="my-5">
        {filteredEvents}
      </div>
    </>
  )
}