import React, {useState, useEffect} from 'react';
import RocketTemplate from "./RockeTemplate";

function RocketDetails({match}) {    
  const [rocket, setRocket] = useState({
     flickr_images: [],
     height: [],
     diameter: [],
     mass: []
  });

  const fetchRocket= async () => {
    const data = await fetch(`https://api.spacexdata.com/v3/rockets/${match.params.rocket_id}`);
    const rocket = await data.json();
    setRocket(rocket);
  };
  
  useEffect(() =>{
    fetchRocket();
  },[]);
 
  return (
    <div className="rocket-details">
      <RocketTemplate rocket={rocket}/>
    </div>
  )
}

export default RocketDetails;