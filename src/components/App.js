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
  bots = [{
    name: 'Emojibot 101',
    image: 'emojibot_banner.png',
  }, {
    name: 'Garkov PostBot 1978',
    image: 'garkov_banner.png'
  }, {
    name: 'AcronymBot0000',
    image: 'acronym_banner.png'
  }, {
    name: 'VsauceBot Here',
    image: 'vsaucebot_banner.png'
  }, {
    name: 'Psychedelic PostBot1337',
    image: 'psychedelic_banner.png'
  }];

  socials = [{
    name: 'YouTube',
    url: '#',
    gradient: [['#760700', '#de2925']]
  }, {
    name: 'Instagram',
    url: '#',
    gradient: [['#fcb84e', '#c5256b', '#7322bf']]
  }, {
    name: 'GitHub',
    url: '#',
    gradient: [['#171717', '#4f4f4f']]
  }]

  constructor (props) {
    super (props);
    this.state = {
      repos: []
    }
  }

  componentDidMount () {
    fetch ('https://api.github.com/users/andithemudkip/repos').then (res => res.json ()).then (res => {
      res = res.filter (r => !r.fork);
      res = res.sort ((a, b) => (b.stargazers_count + b.watchers_count) - (a.stargazers_count + a.watchers_count))
      this.setState ({
        repos: res
      });
      console.log (res);
    });
  }

  render () {
    const { repos } = this.state;
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
            <ParallaxLayer offset = { 0.3 } speed = { 0.5 }>
              <Gradient
                gradients={ textGradients } // required
                property="text"
                duration={ 3000 }
                angle="45deg"
                element = "div"
                className = "big-text border-white"
                transitionType = "sequential"
              >
                Hello! I'm Andi.
              </Gradient>
            </ParallaxLayer>
            <ParallaxLayer offset = { 1.35 } speed = { 1.25 }>
                <div className = "small-text" style = {{ backgroundColor: 'transparent' }}>
                  <div className = "paragraph-title">
                    I love creating. I have created these things™:
                  </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset = { 1.55 } speed = { 1.35 }>
              <div className = "grid-container">
                <div className = "small-text">
                  <div className = "paragraph-title">
                    Facebook bots:
                  </div>
                  <ul className = "bot-list">
                    {
                      this.bots.map (bot => {
                        return (
                          <li key = {bot.name}>
                            <img src = {require (`../assets/${bot.image}`)}/>
                            <div className = "bot-title">{bot.name}</div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>

                <div className = "small-text" id = "repos-container">
                  <div className = "paragraph-title">
                    Github Repos:
                  </div>
                  <ul className = "repo-list">
                    {
                      repos.map (repo => {
                        return (
                          <li key = {repo.name}>
                            <div onClick = {() => { window.open (repo.html_url, "_blank") }} className = "repo-title">{repo.name}</div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset = { 2 } speed = { 1 }>
                <div className = "small-text">
                  <div className = "paragraph-title">
                    You can find me on:
                  </div>
                </div>
                <div>
                  {
                    this.socials.map (s => {
                      console.log (s);
                      return (
                        <Gradient
                          gradients={ s.gradient } // required
                          property="background"
                          duration={ 6000 }
                          angle="45deg"
                          element = "div"
                          style = {{ fontFamily: "Fredoka One", color: 'white' }}
                          className = "small-text"
                          transitionType = "sequential"
                        >
                          {s.name}
                        </Gradient>
                      )
                    })
                  }
                  {/* <div className = "small-text">
                    <div className = "paragraph-title">
                      SoundCloud
                    </div>
                  </div>
                  <div className = "small-text">
                    <div className = "paragraph-title">
                      YouTube
                    </div>
                  </div> */}
                </div>
                
            </ParallaxLayer>
            
  
          </Parallax>
        </Gradient>
      </div>
    );
  }
}

export default App;
