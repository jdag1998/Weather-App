import { Link } from "react-router-dom"
export default function NavBar() {

    return (
        <nav className="navbar bg-dark text-light mb-5">
            <div className="container"> 
            <h3>Weather App</h3>
            <div className="routes">
            <Link to ='/home' className="btn ">Home</Link>
            <Link to ='/use' className="btn ">How to use the App?</Link>
            <Link to ='/about' className="btn ">About</Link>
            </div>
            </div>
        </nav>
    )
}
