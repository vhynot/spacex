import React, {useState, useEffect, useRef} from 'react';
import L from 'leaflet';
import  "../../../../../node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.min.js";
import "../../../../stylesheets/about/about.css.map"
import icn from '../../../../assets/icons/rocket.png';

function Map(){
    const [width, setWidth] = useState(window.innerWidth)
    function handleResize() {
        setWidth(window.innerWidth)
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [width]);
    const myIcon = L.icon({
                iconUrl: icn,
                iconSize: [25, 45],
                popupAnchor: [0,-21],
            });       
    const myFilter = ['invert:13%','bright:153%','contrast:145%'];   
                        ///CREATING MAP///
    const mapRef = useRef(null);

    const lat1 = 37;
    let long1 = () => {
        if (width <= 767){
            return -105
        } else {
            return -100
        }
    };
    useEffect(() =>{
        mapRef.current = L.map('map',{
            center: [lat1, long1()],
            zoom: `${(width <= 767) ? 3 : 4}`,
            layers: [
                L.tileLayer.colorFilter('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 15,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                filter: myFilter,
            })]                   
        });
    }, []);

                        ///CREATING MARKER///
    const markerRef = useRef(null);

    useEffect(() =>{
        markerRef.current = L.marker([33.920917, -118.328163], {icon: myIcon})
                            .bindPopup('SpaceX Headquarter')
                            .addTo(mapRef.current)
    }, []);
 
    return (
        <div id="map"></div>
    )
}

export default Map;