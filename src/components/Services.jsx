import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faUserTie, faHeadphones, faLightbulb, faVideo, faCalendarAlt, faBolt,faCameraRetro } from '@fortawesome/free-solid-svg-icons';

const Services = () => (
    <div className="services">
        <h3>Our Services</h3>
        <ul className="services-list">
    <li>
        <FontAwesomeIcon icon={faMicrophone} /> <span>PA</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faUserTie} /><span> MC</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faHeadphones} /> <span>DJ</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faLightbulb} /> <span>Stage Lighting</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faCameraRetro} /><span>Photography</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faVideo} /> <span>Live Streaming</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faCalendarAlt} /> <span>Event Planning</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faBolt} /> <span>Backup Generator</span>
    </li>
   
</ul>
<p><Link to="/booking">Please Visit our Bookings Page to Choose your Package<sup>
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
</svg>
</sup>
</Link></p>



    </div>
);

export default Services;