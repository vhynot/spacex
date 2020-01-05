import React, {useState, useEffect} from 'react';
import Rockets from "../individualRocket/Rockets";
import '../../stylesheets/SpaceFleet.css';




function SpaceFleet() {

  
  const [items, setItems] = useState([])

  const fetchItem = async () => {
    const data = await fetch('https://api.spacexdata.com/v3/rockets')
    const items = await data.json()
  
    setItems(items)
  }
  
  useEffect(() =>{
    fetchItem()
 }, [])

 const handleClick = (id) => {
                console.log("Click test of rocket " + id)
  }

  const spreadRocket = items.map(rocket => { 
            return (
                        <Rockets key={rocket.id} 
                                item={rocket} 
                                handleClick={handleClick}
                                />
          )}
)
 
    return (
          <div className="container">
                  {spreadRocket}
          </div>
    );
}

export default SpaceFleet;