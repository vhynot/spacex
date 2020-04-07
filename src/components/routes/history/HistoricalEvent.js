import React from 'react'

 function HistoricalEvent({item}) {
     let x = item.event_date_utc;
     let date = x.split('T', 1)
     console.log(x.split('-',1))
     
     return (
         <div className="history__moment">
             <div className="history__title">
                {item.title}
             </div>
             <div className="history__date">
                {date}
             </div>
                <p className="history__details">
                    {item.details}
                </p>
                <a href={item.links.article}
                   className="history__link">
                    More
                </a>
         </div>
     )
 }

export default HistoricalEvent