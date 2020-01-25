import React, {useState, useEffect} from 'react';
import RocketDetails from "../individualRocket/RocketDetails"
import "../../stylesheets/RocketDetails.css"

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

                  <RocketDetails rocket={rocket}/>
                 
            </div>
    );
}

export default RocketTemplate