import React, {useState, useEffect} from 'react';
import RocketDetails from "../individualRocket/RocketDetails"
import "../../stylesheets/RocketDetails.css"
import svg1 from "../../img/Component1.svg"
// import svg2 from "../../img/Component2.svg"

function RocketTemplate({match}) {

  
  const [rocket, setRocket] = useState({
     flickr_images: [],
     height: [],
     diameter: [],
     mass: []
  })

  const fetchRocket= async () => {
    const data = await fetch(`https://api.spacexdata.com/v3/rockets/${match.params.rocket_id}`)
    const rocket = await data.json()
    setRocket(rocket)
  }
  
  useEffect(() =>{
    fetchRocket()
    
 }, [])
 
    return (
            <div className="rocketdetails-container">
                  <h3 className="rocket-name"> {rocket.rocket_name}</h3>
                  <RocketDetails rocket={rocket}/>
                  <div className="rocketdetails-section-1">

                  </div>
                  <div className="rocketdetails-section-2">
                     <img className="svg-1" src={svg1} alt="svg1" />
                  </div>
                  {/* <div className="rocketdetails-section-3">
                  <img className="svg-2" src={svg2} alt="svg2" />
                  </div> */}
            </div>
    );
}

export default RocketTemplate