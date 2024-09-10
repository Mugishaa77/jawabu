import { NavLink } from 'react-router-dom';
import Jawabu from '../logo/jawabu.png';

export default function Navbar () {
    return (
        <div className="navbar">
            <nav>
                <img src={Jawabu} />
                <ul>
                    <li>
                        <NavLink to="/">
                        Home</NavLink>
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        <NavLink to="/booking">
                        Booking</NavLink>
                    </li>
                    <li>
                        Contact 
                    </li>
                </ul>
            </nav>
        </div>
    );
}