import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import ReactPlayer from 'react-player';


function Homepage(){
    return (
        <div>
            <div className="hp-section-title">
                <div className="hp-section-title__layer">
                    <Parallax y={[-40, 40]} >
                        <header className="hp-section-title__header">
                            <div className="hp-section-title__heading-wrapper">
                                <div className="hp-section-title__text-1">MAKING LIFE</div>
                                <div className="hp-section-title__text-2"> MULTI-PLANETARY</div>
                            </div>
                        </header>
                    </Parallax>
                </div>
            </div>
            <section className="hp-section-main">
                <div className="hp-section-main__description">
                    <div className="hp-section-main__description__video">
                        <ReactPlayer url='https://dai.ly/x491qi9' controls={true} />
                    </div>
                    <hr className="hp-section-main__horizontal-rule" />
                    <div className="hp-section-main__description__text">
                        SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology,
                        with the ultimate goal of enabling people to live on other planets.
                    </div>
                </div>
            </section>
    </div>
    )
}

export default Homepage;