import React from "react";

class Intro extends React.Component {
    render() {
        return <section className='bristol-app__container'>
            <div>
                <header className='bristol-app__container__label-wrap'>
                    <h2> My Bristol </h2>
                    <p className='bristol-app__container__label-wrap__intro'>An app to find the shortest route between a few of my favourite places in Bristol, using the Floyd Warshall Algorithm</p>
                </header>

                <div className='bristol-app__container__nodes-wrapper'>
                    <div className='bristol-app__contatiner__nodes-wrapper__startpoint'>
                        <label>Click where you would like to start on the map: </label>
                        <p>a place name will be rendered here</p>
                    </div>
                    <div className='bristol-app__contatiner__nodes-wrapper__endpoint'>
                        <label>Click where you would like to go on the map: </label>
                        <p>A place name will be rendered here</p>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Intro;