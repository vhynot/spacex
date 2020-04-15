import React from 'react';
import RocketTemplate from "./RockeTemplate";
import svg1 from "../../../../assets/img/Component1.svg";
import useDataFetcher from "../../../../utilities/customHooks/useDataFetcher"

function RocketDetails({match}) {  
  const param = `rockets/${match.params.rocket_id}`;
  const {rocket, isLoading, isFetched} = useDataFetcher(param);

  return (
    <div className="rocket-details">
      <div className="rocket-details__layers" >
        <div className="rocket-details__layer-1"></div>
        <img className="rocket-details__layer-2 svg-1" src={svg1} alt="svg1"/>
      </div>
      <RocketTemplate rocket={rocket}
                      loading={isLoading}
                      fetched={isFetched}/>
    </div>
  )
}

export default RocketDetails;