import React, {useState, useEffect} from 'react';
import HistoricalEvent from "./HistoricalEvent"

function History() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const url = "history";

  const fetchItem = async (param) => {
    setIsLoading(true);
    const data = await fetch(`https://api.spacexdata.com/v3/${param}`);
    const items = await data.json();
    setItems(items);
    setFetched(true);
    setIsLoading(false);
    console.log(items)
  }

  useEffect(() => {
    fetchItem(url);
  }, [])

  const spreadItem = items.map(i => <HistoricalEvent  item={i} key={i.id}/>)

  return (
    <section className="history__container">
      <div className="history__timeline">
        {spreadItem} 
      </div>
    </section>
  )
}

export default History;