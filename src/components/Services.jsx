import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faUserTie, faHeadphones, faLightbulb, faVideo, faCalendarAlt, faBolt,faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import System from '../pictures/system.jpg';
import Mcee from '../pictures/mcee.jpg';
import Birthday from '../pictures/birthday.jpg';
import PA from '../pictures/pa.jpg';
import Lighting from '../pictures/lighting.jpg';
import Photography from '../pictures/photography.jpg';
import Stream from '../pictures/stream.jpg'
import Generator from '../pictures/generator.jpg';

const Services = () => (
    <div id="services" className="services">
        <h3>Our Services</h3>
        <ul className="services-list">
    <li>
        <img src={PA} />
       <figcaption>
       <FontAwesomeIcon icon={faMicrophone} /> <span>PA</span>
       </figcaption>
    </li>
    <li>
        <img src={Mcee}/>
        <figcaption>
        <FontAwesomeIcon icon={faUserTie} /><span> MC</span>
        </figcaption>
    </li>
    <li>
        <img src={System} />
       <figcaption>
       <FontAwesomeIcon icon={faHeadphones} /> <span>DJ</span>
       </figcaption>
    </li>
    <li>
       <img src={Lighting}/>
       <figcaption>
       <FontAwesomeIcon icon={faLightbulb} /> <span>Stage Lighting</span>
       </figcaption>
    </li>
    <li>
        <img src={Photography}/>
       <figcaption>
       <FontAwesomeIcon icon={faCameraRetro} /><span>Photography</span>
       </figcaption>
    </li>
    <li>
        <img src={Stream} />
        <figcaption>
        <FontAwesomeIcon icon={faVideo} /> <span>Live Streaming</span>
        </figcaption>
    </li>
    <li>
       <img src={Birthday} />
       <figcaption>
       <FontAwesomeIcon icon={faCalendarAlt} /> <span>Event Planning</span>
       </figcaption>
    </li>
    <li>
        <img src={Generator}/>
       <figcaption>
       <FontAwesomeIcon icon={faBolt} /> <span>Backup Generator</span>
       </figcaption>
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