import Jawabu from '../logo/jawabu.png';

export default function Navbar () {
    return (
        <div className="navbar">
            <nav>
                <img src={Jawabu} />
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Booking
                    </li>
                    <li>
                        Contact 
                    </li>
                </ul>
            </nav>
        </div>
    );
}