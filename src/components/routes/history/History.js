import React, {useState, useEffect} from 'react';
import HistoricalEvent from "./HistoricalEvent"

function History() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  const url = "history";

  const fetchItem = async (param) => {
    setIsLoading(true);
    const data = await fetch(`https://api.spacexdata.com/v3/${param}`);
    const items = await data.json();
    setItems(items);
    setFetched(true);
    setIsLoading(false);
  }

  const handleScroll = () => {
    setScrollHeight(window.scrollY)
  }

  useEffect(() => {
    fetchItem(url);
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
                                        fetched={fetched}
                                        scrollHeight={scrollHeight}/>)

  return (
    <section className="history__container">
      <div className={`history__timeline ${(fetched && !isLoading) && "history__timeline--appear"}`}>
        {spreadItem} 
      </div>
    </section>
  )
}

export default History;