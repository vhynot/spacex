import React, {useState, useEffect} from 'react';
import RocketDetails from "./RocketDetails"
import "../../stylesheets/RocketDetails.css"


function RocketTemplate({match}) {

  
  const [rocket, setRocket] = useState({
     flickr_images: []
  })

  const fetchRocket= async () => {
    const data = await fetch(`https://api.spacexdata.com/v3/rockets/${match.params.rocket_id}`)
    const rocket = await data.json()
    setRocket(rocket)
    // console.log(rocket)
    // console.log(rocket.flickr_images[0])
  }
  
  useEffect(() =>{
    fetchRocket()
    
 }, [])
 
    return (
            <div className="">
               <RocketDetails rocket={rocket}/>
            </div>
    );
}

export default RocketTemplate