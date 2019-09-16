import React, { Component } from "react";
import "../css/place-name.css";



class PlaceName extends Component {

	render () {

		return (
			<div 	
				className={`${this.props.className} bristol-app__container__landmarks`}
				value={this.props.text}
				onClick={ e => alert(this.props.text) }>
					<p>{ this.props.text }</p>
					<i className={`${this.props.iconName} big icon`}/>

					<p className='hidden-p'>{ this.props.text }</p>
			</div>

			


		)
	}
		
};

export default PlaceName;
