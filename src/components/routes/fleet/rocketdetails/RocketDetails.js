import React, {useState, useEffect} from 'react';
import RocketTemplate from "./RockeTemplate";

function RocketDetails({match}) {    
  const [rocket, setRocket] = useState({
     flickr_images: [],
     height: [],
     diameter: [],
     mass: []
  });
  const [loading, setLoading] = useState(false);
  const [fetched, setfetched] = useState(false);

  const fetchRocket= async () => {
    setLoading(true);
    const data = await fetch(`https://api.spacexdata.com/v3/rockets/${match.params.rocket_id}`);
    const rocket = await data.json();
    setRocket(rocket);
    setfetched(true);
    setLoading(false);
  };
  
  useEffect(() =>{
    fetchRocket();
  },[]);
 
  return (
    <div className="rocket-details">
      <RocketTemplate rocket={rocket}
                      loading={loading}
                      fetched={fetched}/>
    </div>
  )
}

export default RocketDetails;