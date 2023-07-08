import { Link } from "react-router-dom"

function Nav() {
    return (
    <nav>
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/desserts" className='nav-item'>Desserts</Link>
        <Link to="/feedback" className="nav-item">Feedback</Link>
    </nav>
    )
}

export default Nav