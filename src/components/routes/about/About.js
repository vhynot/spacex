import React, {useEffect, useRef} from 'react';
import Leaflet from './map/Map';
import moonRocket from '../../../assets/img/Moon_rocket.jpg'

function About(){
  const imageRef = useRef(null)

  useEffect(() => {
    const img = new Image();
      img.onload = function(){
        imageRef.current.style.backgroundImage = `url('${moonRocket}')`
      }

  }, [])

  return (
    <div>
      <section ref={imageRef} className={`about-section-1 `} >
          <h3 className={`about-section-1__text `}>ADVANCING THE FUTURE</h3>
      </section>
      <section className="about-section-2">
            <div className="about-section-2__article-1-wrapper">
              <p className="about-section-2__article-1">As one of the world’s fastest growing providers of launch services,
                SpaceX has secured over 100 missions to its manifest, representing over $12 billion on contract.
                These include commercial satellite launches as well as US government missions. 
                SpaceX’s Dragon spacecraft is flying numerous cargo resupply missions to the space station under a series of
                Commercial Resupply Services contracts. Dragon was designed from the outset to carry humans to space and will 
                soon fly astronauts under NASA’s Commercial Crew Program. Building on the achievements of Falcon 9 and Falcon Heavy,
                  SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built,
                  capable of carrying humans to Mars and other destinations in the solar system.
              </p>
            </div>
            <div className="about-section-2__article-2-wrapper"> 
              <div className="about-section-2__article-2-layer-1"></div>                   
                <div className="about-section-2__article-2-layer-2">
                  <p className="about-section-2__article-2">SpaceX has gained worldwide attention for a series of historic milestones.
                    It is the only private company capable of returning a spacecraft from low Earth orbit,
                    which it first accomplished in 2010.
                    The company made history again in 2012 when its Dragon spacecraft became the first 
                    commercial spacecraft to deliver cargo to and from the International Space Station.
                    SpaceX successfully achieved the historic first reflight of an orbital class rocket in 2017,
                    and the company now regularly launches flight-proven rockets.
                    In 2018, SpaceX began launching Falcon Heavy,
                    the world’s most powerful operational rocket by a factor of two.
                  </p>
                </div>
            </div>
            <div className="about-section-2__article-3-wrapper">    
              <div className="about-section-2__article-3-layer-1"></div>                   
              <div className="about-section-2__article-3-layer-2">               
                <div className="about-section-2__article-3-layer-3">
                  <div className="about-section-2__article-3-about-us">
                    <div className="about-section-2__about-us">                                             
                      <span className="about-section-2__about-us__details-1">CEO</span>
                      <span className="about-section-2__about-us__details-2">Elon Musk</span>
                    </div>
                    <div className="about-section-2__about-us">
                      <span className="about-section-2__about-us__details-1">Founded</span>
                      <span className="about-section-2__about-us__details-2">2002</span>
                    </div>
                    <div className="about-section-2__about-us">
                      <span className="about-section-2__about-us__details-1">Employees</span>
                      <span className="about-section-2__about-us__details-2">7000</span>
                    </div>
                  </div>
                  <div className="about-section-2__article-3-office">
                    <div className="about-section-2__office">  
                      <p className="about-section-2__office__details-1">
                        Headquarter
                      </p>
                    </div>
                    <div className="about-section-2__office">
                        <span className="about-section-2__office__details-2"> Rocket Road</span>
                        <span className="about-section-2__office__details-2">Hawthorne, California</span>
                        <span className="about-section-2__office__details-2"> 310-363-6000</span>
                    </div>                  
                  </div>
                </div>
              </div>
            </div>
      </section>
      <section className="about-section-3">
        <Leaflet />
      </section>
    </div>
  );
}
// ${aboutLoading ? "about-section-1--appear" : null}
// ${aboutLoading ? "about-section-1__text--appear": null}

export default About;