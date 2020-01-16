import React from 'react';
import './stylesheets/App.css';
import {Parallax} from 'react-scroll-parallax';
import ReactPlayer from 'react-player';


function Home(){
    return (
        <div>
            <div className="homepage">
                <div className="layer">
                    <Parallax y={[-40, 40]} >
                        <header>
                            <div className="mainText">
                                    <div className="first-el">MAKING LIFE</div>
                                    <div className="second-el"> MULTI-PLANETARY</div>
                                </div>
                            
                            </header>
                        </Parallax>
                </div>
            </div>
                <section className="section-first-home">
                        <div className="section-first"> 
                            <div className="video-sec-first">
                             <ReactPlayer url='https://dai.ly/x491qi9' controls={true} />
                            </div>
                            <hr />
                            <div className="text-sec-first">
                               
                                SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology,
                                with the ultimate goal of enabling people to live on other planets.
                                
                             </div>
                        </div>
                    </section>
        </div>
    );
}

export default Home;