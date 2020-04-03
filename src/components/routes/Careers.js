import React,{useState, useEffect} from 'react';
import polygon from '../../img/poly.png';

function Careers() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  function handleResize() {
    setWinWidth(window.innerWidth)
};

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      }
  }, [winWidth]);

  const extraStyle = {
    width: `${winWidth}px`
  }

    return (
      <div>
        <section className="careers-section-1">
          <div className="careers-section-1__title-wrapper">
            <p className="careers-section-1__title-1">JOIN US</p>   
          </div>  
        </section>
        <section className="careers-section-2">
          <img className="careers-section-2__polygon" style={extraStyle} src={polygon} alt="pol1" />
          <img className="careers-section-2__polygon rotate" style={extraStyle} src={polygon} alt="pol2" />
        </section>
      </div>
    )
}

export default Careers;