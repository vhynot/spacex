import React, {useEffect, useContext} from 'react';
import {Parallax} from 'react-scroll-parallax';
import ReactPlayer from 'react-player';
import {LoadingContext} from '../../utilities/loadingContext/loadingContext';
import background from '../../assets/img/background1.jpg'
import useCreateImage from "../../utilities/customHooks/useCreateImage";
import {ParallaxProvider} from 'react-scroll-parallax';

function Homepage(){
    const {homepageLoading, handleHomepageLoading} = useContext(LoadingContext);
    const {imageOnLoad} = useCreateImage();

    useEffect(() => {
        imageOnLoad(background, homepageLoading, handleHomepageLoading)
      }, [])

    return (
        <div>
                <div className={`hp-section-title ${homepageLoading ? "hp-section-title--appear" : ""}`}>
                    <div className="hp-section-title__layer">
                        <ParallaxProvider>
                        <Parallax y={[-40, 40]} >
                            <header className="hp-section-title__header">
                                <div className="hp-section-title__heading-wrapper">
                                    <div className={`hp-section-title__text-1 ${homepageLoading ? "hp-section-title__text-1--appear": ""}`}>
                                        MAKING LIFE
                                    </div>
                                    <div className={`hp-section-title__text-2 ${homepageLoading ? "hp-section-title__text-2--appear": ""}`}>
                                        MULTI-PLANETARY
                                    </div>
                                </div>
                            </header>
                        </Parallax>
                        </ParallaxProvider>
                    </div>
                </div>
                <section className="hp-section-main">
                    <div className="hp-section-main__description">
                        <div className="hp-section-main__description__video">
                            <ReactPlayer onReady={() => handleHomepageLoading()} url='https://dai.ly/x491qi9' controls={true}/>
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