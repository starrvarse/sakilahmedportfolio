import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-faded-text">Sakil Ahmed</div>

          <div className="link-wrapper">
            <div>
              <Link href="#projects">Projects</Link>
            </div>
            <div>
              <Link href="#skills">Skills</Link>
            </div>
            <div>
              <Link href="#contactme">Contact Me</Link>
            </div>
          </div>

          <div className="icon-wrapper">
            <Link href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </Link>
            <Link href="#" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;