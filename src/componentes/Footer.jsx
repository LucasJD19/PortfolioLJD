import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
     
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="icono"style={{ margin: '0 10px'}}/>
      </a>
      <a href="https://www.instagram.com/lucas_jonas_diaz/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" className="icono" style={{ margin: '0 10px'}} />
      </a>
    </footer>
  );
};

export default Footer;