import React from 'react';
import svg1 from "../../../../img/Component1.svg";

const RocketTemplate = ({rocket, loading, fetched}) => {
    return (
    <div>       
        <section className="rocket-details__section-1">
            <div className="rocket-details__section-1__layers" >
                <div className="rocket-details__section-1__layer-1"></div>
                <img className="rocket-details__section-1__layer-2 svg-1" src={svg1} alt="svg1" />
            </div>
            <div className={`rocket-details__section-1__title ${(!loading && fetched) ? "rocket-details--active" : null}`}>
                <h3 className="rocket-details__section-1__title__text">
                    {rocket.rocket_name}
                </h3>
            </div>
            <div className={`rocket-details__section-1__details-card-1 ${(!loading && fetched) ? "rocket-details--active" : null}`}>
                <div className="rocket-details__section-1__img-wrapper">
                    <img className="rocket-details__section-1__img" src={rocket.flickr_images} alt=""/>
                </div>
                <div className="rocket-details__section-1__details-card-2">
                    <p className="rocket-details__section-1__details-card-2__description">{rocket.description}</p>
                </div>
            </div>
        </section>  
        <section className={`rocket-details__section-2 ${(!loading && fetched) ? "rocket-details--active" : null}`}>
            <p className="rocket-details__section-2__header">Specification Card</p>
            <hr className="rocket-details__section-2__horizontal-rule"/>
            <div className="rocket-details__section-2__details">
                <span className="rocket-details__section-2__caption">Country of Registry</span>
                <span className="rocket-details__section-2__specification">{rocket.country}</span>
            </div>
            <div className="rocket-details__section-2__details">
                <span className="rocket-details__section-2__caption">First Flight</span>
                <span className="rocket-details__section-2__specification">{rocket.first_flight}</span>
            </div>
            <div className="rocket-details__section-2__details">
                <span className="rocket-details__section-2__caption">Height</span>
                <span className="rocket-details__section-2__specification">{rocket.height.meters}<span className="units">m</span></span>     
            </div>
            <div className="rocket-details__section-2__details">
                <span className="rocket-details__section-2__caption">Diameter</span>
                <span className="rocket-details__section-2__specification">{rocket.diameter.meters}<span className="units">m</span></span>
            </div>
            <div className="rocket-details__section-2__details">
                <span className="rocket-details__section-2__caption">Mass</span>
                <span className="rocket-details__section-2__specification">{rocket.mass.kg}<span className="units">kg</span></span>
            </div>
            <div className="rocket-details__section-2__details">
                <span className="rocket-details__section-2__caption">Cost per Launch</span>
                <span className="rocket-details__section-2__specification">{rocket.cost_per_launch}<span className="units">$</span></span>
            </div>
            <div className="rocket-details__section-2__details">
                <span className="rocket-details__section-2__caption">Success Rate</span>   
                <span className="rocket-details__section-2__specification">{rocket.success_rate_pct}<span className="units">%</span></span>
            </div>
            <div className="rocket-details__section-2__details">
                <span className="rocket-details__section-2__caption">Status</span>
                {(rocket.active) ? <span className="rocket-details__section-2__specification specification--active">Active</span> : <span className="rocket-details__section-2__specification specification--inactive">Inactive</span>}
            </div>
        </section>
    </div>
    )
}

export default RocketTemplate;