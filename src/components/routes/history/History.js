import React, {useState, useEffect} from 'react';
import HistoricalEvent from "./HistoricalEvent";
import useDataFetcher from "../../../utilities/customHooks/useDataFetcher"

function History() {
  const param = "history";
  const {items, isLoading, isFetched} = useDataFetcher(param);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollHeight(window.scrollY)
  }
  
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
    <section className="history__container history__img">
      <div className={`history__timeline ${(isFetched && !isLoading) && "history__timeline--appear"}`}>
        {spreadItem} 
      </div>
    </section>
  )
}

export default History;