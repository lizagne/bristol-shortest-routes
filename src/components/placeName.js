import React from "react";
import "../css/place-name.css";



const PlaceName = (props) => {

	return (
		<button className={`${props.className} bristol-app__container__landmarks`}>
			<p>{ props.text }</p>
			<i className={`${props.iconName} big icon`}/>
		</button>
	)	
};

export default PlaceName;