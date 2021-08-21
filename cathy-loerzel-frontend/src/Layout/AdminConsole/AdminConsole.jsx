import { useState, useEffect } from "react"

export default function AdminConsole() {
  const [cards, setCards] = useState([])
  const [err, setErr] = useState(null)

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/blogs`
    fetch(url)
      .then(res => res.json())
      .then((res) => setCards(res.data))
      .catch(setErr)
  }, [])

  const BlogTable = () => (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Order #</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Topic</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <th>{card.title}</th>
            <th>{card.category}</th>
            <th>{card.topic}</th>
            <th>{card.date.slice(0, 10)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <div className="admin-console w-container">
      <h1>Admin Console</h1>
      <BlogTable />
    </div>
  )
}