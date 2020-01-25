import React from 'react'
import "../../stylesheets/RocketDetails.css"
import svg1 from "../../img/Component1.svg"

const RocketDetails = ({rocket}) => {
     console.log(rocket)

    return (
            <div>
                
               <section className="rocketdetails-section-1">
                    <div className="rocketdetails-layers" >
                            <div className="rocketdetails-section-1-layer-1"> </div>
                            <img className="rocketdetails-section-1-layer-2 svg-1" src={svg1} alt="svg1" />
                    </div>
               <div className="rocket-name"> <h3>{rocket.rocket_name}</h3></div>
               <div className="details-card">
                    <div className="card">
                        <img className="rocket-image" src={rocket.flickr_images} alt=""/>
                    </div>
                    <div className="rocket-card-details">
                        <p className="spec1"> Description</p>
                        <p className="description">{rocket.description}</p>
                    </div>
                </div>
               </section>
               
               <section className="rocketdetails-section-2">
               
               <div className="details-card-2" >
                    <p className="spec2">Specification Card</p>
                    <hr />
                    <div>
                        <div className="spec-details">
                            <span className="caption">Country of Registry</span>
                            <span className="rocket-spec">{rocket.country}</span>
                        </div>

                        <div className="spec-details">
                            <span className="caption">First Flight</span>
                            <span className="rocket-spec">{rocket.first_flight}</span>
                        </div>
                        
                        <div className="spec-details">
                            <span className="caption">Height</span>
                            <span className="rocket-spec">{rocket.height.meters}<span className="units">m</span></span>
                        </div>
                    
                        <div className="spec-details">
                            <span className="caption">Diameter</span>
                            <span className="rocket-spec">{rocket.diameter.meters}<span className="units">m</span></span>
                        </div>
                        
                        <div className="spec-details">
                            <span className="caption">Mass</span>
                            <span className="rocket-spec">{rocket.mass.kg}<span className="units">kg</span></span>
                        </div>

                        <div className="spec-details">
                            <span className="caption">Cost per Launch</span>
                            <span className="rocket-spec">{rocket.cost_per_launch}<span className="units">$</span></span>
                        </div>

                        <div className="spec-details">
                            <span className="caption">Success Rate</span>
                            <span className="rocket-spec">{rocket.success_rate_pct}<span className="units">%</span></span>
                        </div>

                        <div className="spec-details">
                            <span className="caption">Status</span>
                            {(rocket.active) ? <span className="rocket-spec active">Active</span> : <span className="rocket-spec inactive">Inactive</span>}
                        </div> 
                    </div>
                </div>
               </section>
            </div>
    )
}

export default RocketDetails