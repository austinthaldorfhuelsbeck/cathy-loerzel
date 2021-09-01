export default function Accordion({ data }) {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title">
          <div>{data[0].title}</div>
          <div>+</div>
        </div>
        <div className="accordion-content" dangerouslySetInnerHTML={{ __html: data[0].text }}></div>
      </div>
    </div>
  )
}