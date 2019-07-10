import React from 'react'
import LeftBar from './LeftBar'
import Loader from './Loader'
import VideosList from './VideosList'
import styled from 'styled-components'
import VoiceEvent from './../../index'
import synchronize from './youtube/synchronize'
import YouTubePlayer from 'youtube-player'

const MainStyle = styled.article`
  && {
    display: flex;
    height: 100%;
  }
  .content {
    flex: 1;
    display: flex;
    background-color: #f7f7f7;
    padding-top: 50px;
    
    .loader-block {
      display: flex;
    }
  }
  #video-player {
    //height: 0;
    //width: 0;
    margin: 0 20px;
    height: 80%;
    width: 100%;
  }
  .right-bar {
    overflow: auto;
    width: 30%;
    height: 100%;
    display: flex;
  }
`

export default class MainComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isAmyReady: false
    }
    this.setAmyReady = (value = true) => {
      this.setState({ isAmyReady: value })
    }
  }

  componentDidMount () {
    let player
    let currentVolume = 50
    player = YouTubePlayer('video-player')
    player.setVolume(currentVolume)

    VoiceEvent.addEvent(
      'тест',
      () => this.setAmyReady(true),
      {
        nestedEvents: [
          {
            command: 'включи музику',
            actions: [() => {
              player.loadVideoById('L4eljjBtlRw')
              player.playVideo()
              this.setAmyReady(false)
            }]
          },
          {
            command: 'зупини музику',
            actions: [() => {
              player.stopVideo()
              this.setAmyReady(false)
            }]
          },
          {
            command: 'збільшити звук',
            actions: [() => {
              currentVolume += 10
              player.setVolume(currentVolume)
              this.setAmyReady(false)
            }]
          },
          {
            command: 'зменшити звук',
            actions: [() => {
              currentVolume -= 10
              player.setVolume(currentVolume)
              this.setAmyReady(false)
            }]
          }
        ]
      }
    )

    VoiceEvent.init('uk-UA')
  }

  synchronize () {
    synchronize()
  }

  render () {
    const { isAmyReady } = this.state

    return <MainStyle>
      <LeftBar/>
      <article className="content">
        {/*<button onClick={this.synchronize}>synchronize</button>*/}
        <aside className="loader-block">
          { isAmyReady ? <Loader/> : '' }
        </aside>
        <div id="video-player"/>
        <aside className="right-bar">
          <VideosList/>
        </aside>
      </article>
    </MainStyle>
  }
}
