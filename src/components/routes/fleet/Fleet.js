import React from 'react';
import FleetRocket from "./FleetRocket";
import useDataFetcher from "../../../utilities/customHooks/useDataFetcher"


function Fleet() {
  const param = "rockets"
  const {items, isLoading, isFetched} = useDataFetcher(param);

  const spreadRockets = items.map(rocket =>
        <FleetRocket  key={rocket.id} 
                      item={rocket} 
                      lodaing={isLoading}
                      fetched={isFetched}/>
  )
  return (
    <div className="rocket-wrapper">
      {spreadRockets}
    </div>
  )
}

export default Fleet;