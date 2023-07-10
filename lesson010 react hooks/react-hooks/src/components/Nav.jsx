import { Link } from "react-router-dom"

function Nav() {
    return (
    <nav>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/use-state-example" className='nav-item'>Use State Example</Link>
        <Link to="/using-use-effect" className='nav-item'>Using Use Effect Example</Link>
        <Link to="/fetching-data" className='nav-item'>Fetching Data Example</Link>
        <Link to="/use-reducer-example" className='nav-item'>Use Reducer Example</Link>
        <Link to="/use-ref-example" className='nav-item'>Use Ref Example</Link>
        <Link to="/hoc-example" className='nav-item'>HOC example</Link>
    </nav>
    )
}

export default Nav