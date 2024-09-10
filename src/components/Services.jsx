import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faUserTie, faHeadphones, faLightbulb, faVideo, faCalendarAlt, faBolt } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faVideo} /> <span>Live Streaming</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faCalendarAlt} /> <span>Event Planning</span>
    </li>
    <li>
        <FontAwesomeIcon icon={faBolt} /> <span>Backup Generator</span>
    </li>
</ul>




    </div>
);

export default Services;