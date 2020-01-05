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
                <div className="section-second-about-p">
                  <div className="layer-1"></div>
                  <div className="layer-2"></div>
                  <div className="layer-3"></div>
                  <div className="section-second-about-first-div">
                    <p className="about-first-p">As one of the world’s fastest growing providers of launch services,
                     SpaceX has secured over 100 missions to its manifest, representing over $12 billion on contract.
                     These include commercial satellite launches as well as US government missions. 
                     SpaceX’s Dragon spacecraft is flying numerous cargo resupply missions to the space station under a series of
                      Commercial Resupply Services contracts. Dragon was designed from the outset to carry humans to space and will 
                      soon fly astronauts under NASA’s Commercial Crew Program.Building on the achievements of Falcon 9 and Falcon Heavy,
                       SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built,
                        capable of carrying humans to Mars and other destinations in the solar system.
                    </p>
                  </div>
                  <div className="section-second-about-second-div" >
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
                  <div className="section-second-about-third-div">
                    <div className="section-second-about-third-div-flex-1">
                       <tabel className="section-second-tabel">
                          <tr>
                            <td  className="tabel-font-1">CEO</td>
                            <td  className="tabel-font-1">Founded in</td>
                            <td  className="tabel-font-1">Employees</td>
                          </tr>
                          <tr>
                            <td className="tabel-font-2">Elon Musk</td>
                            <td className="tabel-font-2">2002</td>
                            <td className="tabel-font-2">7000</td>
                          </tr>
                       </tabel>
                    </div>
                    <div className="section-second-about-third-div-flex-2">
                       <div className="headquarter-1">
                         <p  className="tabel-font-3">
                           Headquarter
                         </p>
                       </div>
                       <div className="headquarter-2">
                          <div  className="tabel-font-4"> Rocket Road</div>
                          <div  className="tabel-font-4">Hawthorne, California</div>
                          <div  className="tabel-font-4"> 310-363-6000</div>
                       </div>
                    </div>
                  </div>
                </div>
            </section>
            <section classname="section-third-about">
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