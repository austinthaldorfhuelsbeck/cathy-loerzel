import { Link } from "react-router-dom"

export default function DashboardNav() {
  return (
    <nav>
      <div className="text-white bg-dark">
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/admin/dashboard" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/blogs/new" className="nav-link text-white">
              New Blog Post
            </Link>
          </li>
          <li>
            <Link to="/topics" className="nav-link text-white">
              All Topics
            </Link>
          </li>
          <li>
            <Link to="/categories" className="nav-link text-white">
              All Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}