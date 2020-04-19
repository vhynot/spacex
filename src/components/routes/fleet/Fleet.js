import React, {useEffect, useContext} from 'react';
import FleetRocket from "./FleetRocket";
import useDataFetcher from "../../../utilities/customHooks/useDataFetcher";
import {LoadingContext} from '../../../utilities/loadingContext/loadingContext';

function Fleet() {
  const {reset} = useContext(LoadingContext)
  const param = "rockets"
  const {items, isLoading, isFetched} = useDataFetcher(param);

  const spreadRockets = items.map(rocket =>
        <FleetRocket  key={rocket.id} 
                      item={rocket} 
                      loading={isLoading}
                      fetched={isFetched}/>
  )

  useEffect(() => {
    reset()
    return () => {
    }
  }, [])

  return (
    <div className="rocket-wrapper">
      {spreadRockets}
    </div>
  )
}

export default Fleet;