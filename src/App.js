import React from 'react';
import "./stylesheets/style.css";
import "../node_modules/leaflet/dist/leaflet.css";
import Navbar from './components/partials/Navbar';
import Footer from "./components/partials/Footer";
import Homepage from "./components/routes/Homepage";
import About from "./components/routes/about/About";
import Fleet from "./components/routes/fleet/Fleet";
import RocketDetails from "./components/routes/fleet/rocketdetails/RocketDetails";
import Careers from "./components/routes/careers/Careers";
import History from "./components/routes/history/History";
import {ParallaxProvider} from 'react-scroll-parallax';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from "./utilities/window/ScrollToTop"


function App(){

  return (
    <ParallaxProvider>
      <Router>
        <ScrollToTop />
        <Navbar onLoad={() => {
          console.log("loaded")
        }}/>
          <Switch>
            <Route path="/" exact component={Homepage}  />
            <Route path="/about" component={About}  />
            <Route path="/fleet" exact component={Fleet} />
            <Route path="/fleet/:rocket_id" component={RocketDetails} />
            <Route path="/careers" component={Careers}  />
            <Route path="/history" component={History}  />
          </Switch>
        <Footer/>
      </Router>
    </ParallaxProvider>
  )
}

export default App;