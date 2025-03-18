import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="padded flow not-found">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you were looking for was not found. Keep looking, or perhaps <Link to="/">return to the home page</Link>.</p>
    </div>
  )
}