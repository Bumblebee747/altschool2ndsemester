import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo'

const Navbar = () => {
  return (
        <div className="Navbar">
            <Logo />
            <ul>
                <li><NavLink to="#">Home</NavLink></li>
                <li><NavLink to="/repos">Repos</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/more">More</NavLink></li>
            </ul>
        </div>
  )
}

export default Navbar