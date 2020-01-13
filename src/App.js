import React from 'react'
import "./stylesheets/App.css"
import "./stylesheets/Navbar.css"
import "../node_modules/leaflet/dist/leaflet.css"
import Navbar from './components/partials/Navbar'
import Home from "./Home"
import About from "./components/routes/About"
import SpaceFleet from "./components/routes/SpaceFleet"
import Careers from "./components/routes/Careers"
import History from "./components/routes/History"
import RocketTemplate from "./components/routes/RocketTemplate"
import { ParallaxProvider } from 'react-scroll-parallax'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from "./components/partials/Footer"


function App(){

  return (
    <ParallaxProvider>
        <Router>
             <div>
               <Navbar />
                  <Switch>
                    <Route path="/" exact component={Home}  />
                    <Route path="/about" component={About}  />
                    <Route path="/spacefleet" exact   component={SpaceFleet} />
                    <Route path="/spacefleet/:rocket_id" component={RocketTemplate} />
                    <Route path="/careers" component={Careers}  />
                    <Route path="/history" component={History}  />
                  </Switch>
                <Footer/>
             </div>
         </Router>
    </ParallaxProvider>
  )
}

export default App