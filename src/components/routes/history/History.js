import React, {useState, useEffect, useContext} from 'react';
import HistoricalEvent from "./HistoricalEvent";
import useDataFetcher from "../../../utilities/customHooks/useDataFetcher";
import {LoadingContext} from '../../../utilities/loadingContext/loadingContext';
import background from '../../../assets/img/crew-dragon.jpg'

function History() {
  const {historyLoading, handleHistoryLoading} = useContext(LoadingContext);
  const param = "history";
  const {items, isLoading, isFetched} = useDataFetcher(param);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  
  const handleScroll = () => {
    setScrollHeight(window.scrollY)
  }
  
  useEffect(() => {
    const img = new Image();
    img.src = background;
    if (!historyLoading){
      img.onload = () => {
          handleHistoryLoading()
      }
    }
  }, [])
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[scrollHeight])

  const spreadItem = items.map(i => <HistoricalEvent  
                                        item={i}
                                        key={i.id}
                                        loading={isLoading}
                                        fetched={isFetched}
                                        scrollHeight={scrollHeight}/>)

  return (
    <section className={`history__container history__img ${historyLoading ? "history__img--appear" : ""}`}>
      <div className={`history__timeline ${((isFetched && !isLoading) && historyLoading) && "history__timeline--appear"}`}>
        {spreadItem} 
      </div>
    </section>
  )
}

export default History;