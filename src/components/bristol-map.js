import React from "react";
import "../css/bristol-map.css";
import PlaceName from './placeName';


class BristolMap extends React.Component {

    render() {
        return <div className='bristol-app__map-container'>
            <div id="map">

            	<div className="bristol-app__map-container__nodes-wrapper">

		            <PlaceName 
		            	text="My home"
		            	className="home"
		            	iconName="home" />
		            <PlaceName 
		            	text="Museum"
		            	className="museum"
		            	iconName="university"/>
		            <PlaceName 
		            	text="Beeses"
		            	className="beeses"
		            	iconName="coffee"/>
		            <PlaceName 
		            	text="The Canteen"
		            	className="canteen"
		            	iconName="music"/>
		            <PlaceName 
		            	text="Durdham Downs"
		            	className="downs"
		            	iconName="tree"/>
		            <PlaceName 
		            	text="Portishead"
		            	className="portishead"
		            	iconName="ship"/>
		        </div>
		            	
			</div>

        </div>;
    }
}


export default BristolMap;
