import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {LoadingContext} from '../../../utilities/loadingContext/loadingContext'


function FleetRocket({item}) {
    const {loading, increment} = useContext(LoadingContext)

    return(
        <div className="rocket">
            <Link  className={`rocket__link ${(loading > 3) ? "rocket__link--active" : ""}`}
                    to={`/fleet/${item.rocket_id}`}>
                <img className="rocket__img " 
                     src={item.flickr_images[1]} 
                     alt={item.id}
                     onLoad={() => increment()}/>         
                <p className="rocket__title">{item.rocket_name}</p>
            </Link>
        </div>
    )
}

export default FleetRocket;

