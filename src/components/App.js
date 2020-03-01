import React, { Component } from 'react';
import './App.css';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Gradient } from 'react-gradient';

import Taskbar from './Taskbar';

const textGradients = [
  ['#12c2e9', '#c471ed'],
  ['#c471ed', '#12c2e9'],
];

const backgroundGradients = [
  ['#7F7FD5', '#86A8E7', '#91EAE4']
]

class App extends Component {
  render () {
    return (
      <div className = "App">
        <Gradient
            gradients={ backgroundGradients } // required
            property="background"
            duration={ 3000 }
            angle="45deg"
            element = "div"
            className = "content"
            transitionType = "sequential"
        >
          <Parallax pages = { 3 } scrolling = { true } ref = {ref => this.parallax = ref}>
            <ParallaxLayer offset = { 0 } speed = { 0.5 }>
              <Gradient
                gradients={ textGradients } // required
                property="text"
                duration={ 3000 }
                angle="45deg"
                element = "div"
                className = "big-text border-white"
                transitionType = "sequential"
              >
                Hello!
              </Gradient>
            </ParallaxLayer>
            <ParallaxLayer offset = { 0.25 } speed = { 1 }>
                <div className = "small-text" style = {{ backgroundColor: 'transparent' }}>
                  I'm <span style = {{fontFamily: 'Fredoka One'}} >Andi</span>. I love creating. I have created these things™:
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset = { 0.4 } speed = { 1.35 }>
                <div className = "small-text">
                  <div className = "paragraph-title">
                    Facebook bots:
                  </div>
                  <ul className = "bot-list">
                    <li>
                      <img src = {require ('../assets/emojibot_banner.png')}/>
                      <div className = "bot-title">Emojibot 101</div>
                    </li>
                    <li>
                      <img src = {require ('../assets/garkov_banner.png')}/>
                      <div className = "bot-title">Garkov PostBot 1978</div>
                    </li>
                    <li>AcronymBot0000</li>
                    <li>VsauceBot Here</li>
                    <li>PsychedelicPostBot1337</li>
                    <li>Text2SpeechBot 0010</li>
                  </ul>
                </div>
            </ParallaxLayer>

            {/* <ParallaxLayer offset = { 0.25 } speed = { 1 }>
                <div className = "small-text">
                  I'm Andi. I love creating. I have created these things™:
                </div>
            </ParallaxLayer> */}
  
          </Parallax>
        </Gradient>
      </div>
    );
  }
}

export default App;
