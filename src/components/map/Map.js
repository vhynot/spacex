import React, {useEffect, useRef} from 'react';
import L from 'leaflet';
import  "../../../node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.min.js"
import icn from '../../icons/Favorites/rocket.png'

function Map({markerPosition}){

const myIcon = L.icon({
            iconUrl: icn,
            iconSize: [25, 45],
            popupAnchor: [0,-21],
        });
        
const myFilter = ['invert:94%','bright:33%','contrast:194%','saturate:97%','sepia:10%'];
        
const mapRef = useRef(null);


useEffect(() =>{

                    ///CREATING MAP///

    mapRef.current = L.map('map',{
        center: [39, -105],
        zoom:4,
        layers: [
            L.tileLayer.colorFilter('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
            maxZoom: 15,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            filter: myFilter,
        })]                   
    });
}, []);

                        ///CREATING MARKER///

const markerRef = useRef(null);

useEffect(() =>{
    markerRef.current = L.marker([
        33.920917, -118.328163
    ], {icon: myIcon})
    .bindPopup('SpaceX Headquarter')
    .addTo(mapRef.current)}, []);

 
return(
            <div id="map"></div>
);
}

export default Map;