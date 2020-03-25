import React from 'react'
import {Link} from 'react-router-dom'

function FleetRocket({fetched, loading, item}) {
    const animation = {animation: fetched && !loading ? 'op 1s linear 1' : ''};

    return(
        <div className="rocket">
            <Link   className='rocket__link'       
                    style={animation}
                    to={`/fleet/${item.rocket_id}`}>
                <img className="rocket__img " 
                     src={item.flickr_images[1]} 
                     alt={item.id}/>         
                <p className="rocket__title">{item.rocket_name}</p>
            </Link>
        </div>
    )
}

export default FleetRocket;

