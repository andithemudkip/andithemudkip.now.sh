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
    url: 'https://www.facebook.com/emojibot101/'
  }, {
    name: 'Garkov PostBot 1978',
    image: 'garkov_banner.png',
    url: 'https://www.facebook.com/garkovpostbot/'
  }, {
    name: 'AcronymBot0000',
    image: 'acronym_banner.png',
    url: 'https://www.facebook.com/acronmymbot/'
  }, {
    name: 'VsauceBot Here',
    image: 'vsaucebot_banner.png',
    url: 'https://www.facebook.com/vsaucebot/'
  }, {
    name: 'Psychedelic PostBot1337',
    image: 'psychedelic_banner.png',
    url: 'https://www.facebook.com/1337botpost/'
  }, {
    name: 'Text2SpeechBot 0010',
    image: 't2s_banner.png',
    url: 'https://www.facebook.com/t2sbot/'
  }];

  socials = [{
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCjSZlwS5-hb3RoifaAXupLw',
    gradient: [['#760700', '#de2925']]
  }, {
    name: 'Instagram',
    url: 'https://www.instagram.com/andithemudkip/',
    gradient: [['#fcb84e', '#c5256b', '#7322bf']]
  }, {
    name: 'GitHub',
    url: 'https://github.com/andithemudkip',
    gradient: [['#171717', '#4f4f4f']]
  }, {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/the-aero-zero',
    gradient: [['#EF4A24', '#F5871D']]
  }, {
    name: 'ArtStation',
    url: 'https://www.artstation.com/andithemudkip',
    gradient: [['#111A1F', '#13AEF0']]
  }, {
    name: 'Twitter',
    url: 'https://twitter.com/andithemudkip',
    gradient: [['#33CCFF', '#00ACED']]
  }]

  games = [{
    name: 'Qub',
    status: 'Published',
    url: 'https://play.google.com/store/apps/details?id=com.qbytegames.qublite',
    image: 'qub.webp',
    platform: 'Android',
    description: 'Isometric puzzler - in your pocket'
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
            className = "background"
            transitionType = "sequential"
        >
          <div className = "content">
            
          </div>
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

          <div className = "grid-container">

          <div style = {{ display: 'inline-block' }} >
              <div className = "small-text" style = {{ backgroundColor: 'transparent', display: 'block' }}>
                <div className = "paragraph-title">
                  About me
                </div>
                <div style = {{ textAlign: 'left', marginTop: '1em', color: 'white', fontFamily: 'Roboto', textShadow: '1px 1px rgba(0,0,0,.5)' }}>
                  I love creating. <br/> I have created the following things™:
                </div>
              </div>

              <div className = "small-text" id = "sphynx-container">
                <div className = "paragraph-title">
                  SphynxGames
                </div>
                <div>our games:</div>
                <ul className = "games-list">
                  {
                    this.games.map (game => {
                      return (
                        <li onClick = {() => { window.open (game.url, "_blank") }} key = {game.name}>
                          <img src = {require (`../assets/${game.image}`)}/>
                          <div className = "info">
                            <div className = "game-title">{game.name}</div>
                            <div className = "game-description">{game.description || ''}</div>
                            <div className = "game-status">{game.status}</div>
                            <div className = "game-status">Platform: {game.platform}</div>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            <div className = "small-text">
              <div className = "paragraph-title">
                Facebook bots:
              </div>
              <ul className = "bot-list">
                {
                  this.bots.map (bot => {
                    return (
                      <li onClick = {() => { window.open (bot.url, "_blank") }} key = {bot.name}>
                        <img src = {require (`../assets/${bot.image}`)}/>
                        <div className = "bot-title">{bot.name}</div>
                      </li>
                    );
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

            <div className = "small-text" style = {{ marginTop: "4em", marginBottom: "2em" }}>
              <div className = "paragraph-title">
                You can find me on:
              </div>
            </div>
            <div className = "socials-container">
              {
                this.socials.map (s => {
                  return (
                    <Gradient
                      gradients={ s.gradient } // required
                      property="background"
                      duration={ 6000 }
                      angle="45deg"
                      element = "div"
                      onClick = {() => { window.open (s.url, "_blank") }}
                      style = {{ fontFamily: "Fredoka One", color: 'white' }}
                      className = "small-text social-button"
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
            <div style = {{ padding: "1em", color: 'rgb(40, 40, 40)' }}>Contact: andithemudkip@gmail.com</div>
        </Gradient>
      </div>
    );
  }
}

export default App;
