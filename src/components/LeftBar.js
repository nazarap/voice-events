import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Home from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import styled from 'styled-components'
import Settings from '@material-ui/icons/Settings'
import Layers from '@material-ui/icons/Layers'
import LibraryMusic from '@material-ui/icons/LibraryMusic'
import Movie from '@material-ui/icons/Movie'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import VoiceEvent from './../../index'
import Fab from '@material-ui/core/Fab'
import Loader from './Loader'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

const ListStyle = styled(List)`
  && {
    padding: 20px;
    min-width: 13%;
  }
  .power-item {
    margin: 10px 0 30px 0;
    
    .icon {
      box-shadow: 0 2px 7px -1px rgba(0,0,0,0.2), 2px 4px 5px 1px rgba(0,0,0,0.14), 0px 0px 10px 0px rgba(0,0,0,0.12);
      width: 50px;
      height: 50px;
      
      .power-btn {
        background-color: white;
        color: #888;
        
        &.active {
          background-color: #10c49c;
          color: white;
        }
      }
    }
  }
  .onoff-btn {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    
    .avatar {
      overflow: inherit;
      background-color: white;
    }
  }
  .menu-item {
    cursor: pointer;
    
    .icon {
      background-color: #ff6247;
    }
    
    &:hover {
      box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      
      .icon {
        width: 44px;
        height: 44px;
        margin: -2px;
      }
    }
  }
`

export default class LeftBarComponent extends React.Component {
  constructor (props) {
    super(props)

    this.myRef = React.createRef()
    this.state = {
      voice: false,
      isAmyReady: false,
      speech: ''
    }
    let events = []
    this.setVoice = value => this.setState({ voice: value })
    this.setSpeech = value => this.setState({ speech: value })
    this.setAmyReady = value => {
      this.setState({ isAmyReady: value })
      events.forEach(event => event())
      events = []
      events.push(...[
        VoiceEvent.addEvent('включи музику', () => console.log(VoiceEvent)),
        VoiceEvent.addEvent('зупини музику', () => console.log('Виключи')),
        VoiceEvent.addChangeEvent(this.setSpeech)
      ])
    }
  }

  componentDidMount () {
    VoiceEvent.init('uk-UA')

    VoiceEvent.addEvent(
      'емі',
      () => {
        this.setAmyReady(true)
        setTimeout(() => this.setAmyReady(false), 5000)
      }
    )
  }

  voiceChange = () => {
    if (!this.state.voice) {
      VoiceEvent.startRecognition()
    } else {
      VoiceEvent.stopRecognition()
    }
    this.setVoice(!this.state.voice)
  }

  render () {
    const { voice, isAmyReady, speech } = this.state

    return <ListStyle>
      <ListItem className="power-item">
        <ListItemAvatar>
          <Avatar className="icon">
            <Fab onClick={this.voiceChange}
                 aria-label="Add"
                 className={`power-btn ${ voice ? 'active' : '' }`}>
              <PowerSettingsNew />
            </Fab>
          </Avatar>
        </ListItemAvatar>
        <ListItemText ref={this.myRef}>
          { isAmyReady ?
            <React.Fragment>
              <Loader/>
              { this.myRef.current ? <Popover
                open={true}
                anchorEl={this.myRef.current}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}>
                <Typography
                  className="popover">asdasd asd</Typography>
              </Popover> : null }
            </React.Fragment> : null }
        </ListItemText>
      </ListItem>
      <hr/>
      <ListItem className="menu-item">
        <ListItemAvatar>
          <Avatar className="icon">
            <Home/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem className="menu-item">
        <ListItemAvatar>
          <Avatar className="icon">
            <Subscriptions />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Youtube" />
      </ListItem>
      <ListItem className="menu-item">
        <ListItemAvatar>
          <Avatar className="icon">
            <LibraryMusic />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Music" />
      </ListItem>
      <ListItem className="menu-item">
        <ListItemAvatar>
          <Avatar className="icon">
            <Movie />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Movies" />
      </ListItem>
      <ListItem className="menu-item">
        <ListItemAvatar>
          <Avatar className="icon">
            <Layers />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pages" />
      </ListItem>
      <ListItem className="menu-item">
        <ListItemAvatar>
          <Avatar className="icon">
            <Settings />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Settings" />
      </ListItem>
    </ListStyle>
  }
}
