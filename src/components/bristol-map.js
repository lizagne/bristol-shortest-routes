import React from "react";
import "../css/bristol-map.css";

//This will be an object of the places and all the different places you can go to 
const places = [

];

class BristolMap extends React.Component {

    render() {
        return <div className='bristol-app__map-container'>
            <div id="map"/>
        </div>;
    }
}


export default BristolMap;
