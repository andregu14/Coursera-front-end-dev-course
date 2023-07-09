import { Link } from "react-router-dom"

function Nav() {
    return (
    <nav>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/use-state-example" className='nav-item'>Use State Example</Link>
        <Link to="/using-use-effect" className='nav-item'>Using Use Effect Example</Link>
        <Link to="/fetching-data">Fetching Data Example</Link>
    </nav>
    )
}

export default Nav