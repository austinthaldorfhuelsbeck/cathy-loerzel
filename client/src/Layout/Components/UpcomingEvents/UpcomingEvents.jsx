import AccordionItem from "./AccordionItem"

export default function UpcomingEvents() {
  let events = [
    {
      title: "",
      date: "",
      text: ``
    },
    {
      title: "",
      date: "",
      text: ``
    }
  ]

  return (
    <div className="w-container">
      <h3 className="lg-title">Upcoming Events</h3>
      <div className="accordion">
        {events.map((event) => (
          <AccordionItem key={event.title} item={event} />
        ))}
      </div>
    </div>
  )
}