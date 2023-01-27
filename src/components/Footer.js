import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="footer">
            
            <div> Built with <FontAwesomeIcon icon={faHeart} /> </div>
        </div>
    )
}

export default Footer;