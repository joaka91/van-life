import { Link } from "react-router"

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1 className="hero__heading">You got the travel plans, we got the travel vans.</h1>
        <p className="hero__copy">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <p><Link to="/vans" className="hero__cta cta">Find your van</Link></p>
      </div>
    </>
  )
}