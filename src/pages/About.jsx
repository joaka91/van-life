import { Link } from "react-router"
import aboutImage from '../assets/nick-dunlap-3xpalrYpiwo-unsplash.jpg'

export default function About() {
  return (
    <>
      <img className="image-top" src={aboutImage} alt="White van parked on road" />
      <div className="section flow">
        <h1>Don't squeeze in a sedan when you could relax in a van</h1>
        <p>Our mission is to enliven your road trip with the perfect van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitchs cost extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on four wheels.</p>
        <div className="separator"></div>
        <div className="subsection flow">
          <h2 className="text-center">Your destination is waiting.<br />Your van is ready.</h2>
          <p><Link to="/vans" className="btn">Explore our vans</Link></p>
        </div>
      </div>
    </>
  )
}