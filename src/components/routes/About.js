import React from 'react';
import '../../stylesheets/About.css';
import Leaflet from '../map/Map'

function About(){

  return (
    <div>

      <section className="section-first-about">
        <div className="section-first-about-box">
          <h3>ADVANCING THE FUTURE</h3>
        </div>
      </section>

      <section className="section-second-about">

            {/* <div className="layer-1"></div>
            <div className="layer-2"></div>
            <div className="layer-3"></div> */}
          

            <div className="section-second-about-first-div">
              <p className="about-first-p">As one of the world’s fastest growing providers of launch services,
                SpaceX has secured over 100 missions to its manifest, representing over $12 billion on contract.
                These include commercial satellite launches as well as US government missions. 
                SpaceX’s Dragon spacecraft is flying numerous cargo resupply missions to the space station under a series of
                Commercial Resupply Services contracts. Dragon was designed from the outset to carry humans to space and will 
                soon fly astronauts under NASA’s Commercial Crew Program. Building on the achievements of Falcon 9 and Falcon Heavy,
                  SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built,
                  capable of carrying humans to Mars and other destinations in the solar system.
              </p>
            </div>

            <div className="section-second-about-second-div" >

            <div className="layer-1"></div>
              <div className="second-div-layer"> 
                <p className="about-second-p">SpaceX has gained worldwide attention for a series of historic milestones.
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

            <div className="section-second-about-third-div">
            <div className="layer-2"></div>
              <div className="third-div-layer-1">
                <div className="third-div-layer-2">

                    <div className="section-second-about-third-div-1">
                        <div>
                          <span className="span-1">CEO</span>
                          <span className="span-2">Elon Musk</span>
                        </div>
                        <div>
                          <span className="span-1">Founded in</span>
                          <span className="span-2">2002</span>
                        </div>
                        <div>
                          <span className="span-1">Employees</span>
                          <span className="span-2">7000</span>
                        </div>
                      
                  </div>

                  <div className="section-second-about-third-div-2">

                        <div className="headquarter-1">
                          <p  className="span-3">
                            Headquarter
                          </p>
                        </div>
                        <div className="headquarter-2">
                            <span className="span-4"> Rocket Road</span>
                            <span className="span-4">Hawthorne, California</span>
                            <span className="span-4"> 310-363-6000</span>
                        </div>
                                        
                  </div>
                </div>
              </div>
            </div>
      </section>

      <section className="section-third-about">
        <div>
          <div className="leaflet">
            <Leaflet />
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;