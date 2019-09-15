import React from 'react';
import BristolMap from './components/bristol-map';
import Intro from "./components/intro";
import './css/App.css'

class App extends React.Component {

    render() {
        return (
            <section className='bristol-app'>
                <section className='bristol-app__map-container bristol-app__map-container__wrapper'>
                    <BristolMap /> 
                </section>

                <section className='bristol-app__intro-container bristol-app__intro-container__wrapper'>
                    <Intro />
                </section>
            </section>
        );
    }
}

export default App;
