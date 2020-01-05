import React from 'react'
import {Link} from 'react-router-dom'
const Rockets = (props) => {
    
    return(
        <div className="rocket">
            <Link className="anchor" to={`/spacefleet/${props.item.rocket_id}`}>
                <img className="rocket-resize" src={props.item.flickr_images[1]} alt={props.item.id}/>
                <p className="rocket-title">{props.item.rocket_name}</p>
            </Link>
            
        </div>
    )
}

export default Rockets

