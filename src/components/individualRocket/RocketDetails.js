import React from 'react'
import "../../stylesheets/RocketDetails.css"

const RocketDetails = (props) => {
     console.log(props)
    return (
            <div className="content">
                <h3>
                    {props.rocket.rocket_name}
                </h3>
                 <p>{props.rocket.description}</p>
                 <img src={props.rocket.flickr_images} alt=""/>
            </div>
    )
}

export default RocketDetails