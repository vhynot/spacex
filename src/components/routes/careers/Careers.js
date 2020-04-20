import React,{useState, useEffect, useContext} from 'react';
import polygon from '../../../assets/img/poly.png';
import InputForm from './Form';
import background from '../../../assets/img/joinus.jpg';
import {LoadingContext} from '../../../utilities/loadingContext/loadingContext'
import useCreateImage from "../../../utilities/customHooks/useCreateImage";

function Careers() {
  const {careersLoading, handleCareersLoading} = useContext(LoadingContext);
  const {imageOnLoad} = useCreateImage();
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const extraStyle = {
    width: `${winWidth}px`
  }

  function handleResize() {
    setWinWidth(window.innerWidth)
  };
  
  useEffect(() => {
    imageOnLoad(background, careersLoading, handleCareersLoading)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    }
  }, [winWidth]);

  return (
    <div>
      <section className={`careers-section-1 ${careersLoading ? "careers-section-1--appear" : ""}`}>
        <div className="careers-section-1__title-wrapper">
          <p className={`careers-section-1__title-1 ${careersLoading ? "careers-section-1__title-1--appear" : ""}`}>We are the future</p> 
          <p className={`careers-section-1__title-2 ${careersLoading ? "careers-section-1__title-2--appear" : ""}`}>JOIN US</p>   
        </div>  
      </section>
      <section className="careers-section-2">
        <img className="careers-section-2__polygon" style={extraStyle} src={polygon} alt="pol1" />
        <div className="careers-section-2__form">
          <InputForm />
        </div>
        <img className="careers-section-2__polygon rotate" style={extraStyle} src={polygon} alt="pol2" />
      </section>
    </div>
  )
}

export default Careers;