import React from 'react';
import icon_fb from '../../assets/icons/icons8-facebook-old-50.png';
import icon_tw from '../../assets/icons/icons8-twitter-50.png';
import icon_ig from '../../assets/icons/icons8-instagram-50.png';
import icon_yt from '../../assets/icons/icons8-play-button-50.png';
import icon_li from '../../assets/icons/icons8-linkedin-50.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__resources">
                <a  target="_blank" 
                    href="https://github.com/r-spacex/SpaceX-API"
                    className="footer__resources__link">SpaceX API by SpaceX
                </a>
                <a  target="_blank" 
                    href="https://icons8.com"
                    className="footer__resources__link">Icons by Icons8
                </a>
            </div>
            <div className="footer__social">
                <p className="footer__social__caption">Follow us on Social Media</p>
                <div className="footer__icons">
                    <img className="footer__icons__icon" src={icon_fb} alt="fb" ></img>
                    <img className="footer__icons__icon" src={icon_tw} alt="tw" ></img>
                    <img className="footer__icons__icon" src={icon_ig} alt="ig" ></img>
                    <img className="footer__icons__icon" src={icon_yt} alt="yt" ></img>
                    <img className="footer__icons__icon" src={icon_li} alt="li" ></img>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

