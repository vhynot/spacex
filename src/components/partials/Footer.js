import React from 'react';
import '../../stylesheets/Footer.css';
import icon_fb from '../../icons/Favorites/icons8-facebook-old-50.png'
import icon_tw from '../../icons/Favorites/icons8-twitter-50.png'
import icon_ig from '../../icons/Favorites/icons8-instagram-50.png'
import icon_yt from '../../icons/Favorites/icons8-play-button-50.png'
import icon_li from '../../icons/Favorites/icons8-linkedin-50.png'

function Footer (){
    return (
        <footer>
           <div className="foot">
                <div className="foot-1">
                    <div className="footer-p">
                        <p><a target="_blank" href="https://github.com/r-spacex/SpaceX-API">SpaceX API by SpaceX</a> </p>
                        <p><a target="_blank" href="https://icons8.com">Icons by Icons8</a></p>
                    </div>
                </div>
                <div className="foot-2">
                     <p>Follow us on Social Media:</p>
                        <div className="icons">
                            <img className="icon" src={icon_fb} alt="fb" ></img>
                            <img className="icon" src={icon_tw} alt="tw" ></img>
                            <img className="icon" src={icon_ig} alt="ig" ></img>
                            <img className="icon" src={icon_yt} alt="yt" ></img>
                            <img className="icon" src={icon_li} alt="li" ></img>
                        </div>
                </div>
           </div>
        </footer>
    )
}

export default Footer

