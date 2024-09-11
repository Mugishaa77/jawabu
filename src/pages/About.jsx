import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MapEmbed from '../components/MapEmbed';

export default function About () {
    return (
        <div className="about">
            <p>
           Find us in various locations across the country:
            </p>
            <ul>
  <li>
    <FontAwesomeIcon icon={faLocationDot} /> <span>Mombasa, Coast Province</span>
  </li>
  <li>
    <FontAwesomeIcon icon={faLocationDot} /> <span>Murang'a, Central Province</span>
  </li>
  <li>
    <FontAwesomeIcon icon={faLocationDot} /><span> Eldoret, Rift Valley Province</span>
  </li>
  <li>
    <FontAwesomeIcon icon={faLocationDot} /> <span>Thika, Central Province</span>
  </li>
  <li>
    <FontAwesomeIcon icon={faLocationDot} /> <span>Meru, Eastern Province</span>
  </li>
  <li>
    <FontAwesomeIcon icon={faLocationDot} /> <span>Nakuru, Rift Valley Province</span>
  </li>
  <li>
    <FontAwesomeIcon icon={faLocationDot} /> <span>Nairobi</span>
  </li>
  <li>
    <FontAwesomeIcon icon={faLocationDot} /> <span>Nyeri, Central Province</span>
  </li>
</ul>
<div className="map-section">
    <p>Our main headquarters is located in Thika, Central Province:</p>
    <MapEmbed />

          </div>  
        </div>
    );
}