import React from "react";
import '../css/intro.css';
import PlaceName from './placeName';


class Intro extends React.Component {
    render() {
        return <section className='bristol-app__container'>
            <header className='bristol-app__container__label-wrap'>
                <h2> My Bristol </h2>
                <p className='bristol-app__container__label-wrap__intro'>An app to find the shortest route between two points. Using a few of my favourite places in Bristol, with the Floyd-Warshall Algorithm.</p>
            </header>

            <div className='bristol-app__container__nodes-wrapper'>
                <div className='bristol-app__container__nodes-wrapper__startpoint'>
                    <label>Click where you would like to start on the map: </label>
                    <p>The start point is: {this.getStartPointName()}</p>
                </div>
                <div className='bristol-app__container__nodes-wrapper__endpoint'>
                    <label>Click where you would like to go on the map: </label>
                    <p>The end point is: {this.getTargetPointName()}</p>
                </div>
            </div>

            <div className='bristol-app__container__nodes-wrapper__result'>
                <p> The results of the route will be rendered here as a list with the potential hops and distances: </p>
            </div>

        </section>
    }


    getStartPointName = () => {
        console.log('the start point is', this.props.text);
        return this.props.text ? this.props.text : '';
    };

    getTargetPointName = () => {
        return this.props.text ? this.props.text : '';
    }
}

export default Intro;