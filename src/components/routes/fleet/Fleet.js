import React, {useState, useEffect} from 'react';
import FleetRocket from "./FleetRocket";

function Fleet() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchItem = async () => {
    const data = await fetch('https://api.spacexdata.com/v3/rockets');
    setIsLoading(true);
    setFetched(true);
    const items = await data.json();
    setItems(items);
    setIsLoading(false);
  }
  
  useEffect(() =>{
    fetchItem();
  }, [])

  const spreadRockets = items.map(rocket => { 
      return (
        <FleetRocket  key={rocket.id} 
                      item={rocket} 
                      lodaing={isLoading}
                      fetched={fetched}/>
      )
    }
  )
  return (
    <div className="rocket-wrapper">
      {spreadRockets}
    </div>
  )
}

export default Fleet;