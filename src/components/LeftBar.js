import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import WorkIcon from '@material-ui/icons/Work'
import Home from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
import Settings from '@material-ui/icons/Settings'
import Layers from '@material-ui/icons/Layers'
import LibraryMusic from '@material-ui/icons/LibraryMusic'
import Movie from '@material-ui/icons/Movie'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import VoiceEvent from './../../index'
import Fab from '@material-ui/core/Fab'
import Loader from './Loader'

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

export default () => {
  const [voice, setVoice] = useState(false)

  const voiceChange = () => {
    if (!voice) {
      VoiceEvent.startRecognition()
    } else {
      VoiceEvent.stopRecognition()
    }
    setVoice(!voice)
  }

  return <ListStyle>
    <ListItem className="power-item">
      <ListItemAvatar>
        <Avatar className="icon">
          <Fab onClick={voiceChange}
               aria-label="Add"
               className={`power-btn ${ voice ? 'active' : '' }`}>
            <PowerSettingsNew />
          </Fab>
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        <Loader/>
      </ListItemText>
    </ListItem>
    <hr/>
    {/*<ListItem className="menu-item onoff-btn" onClick={voiceChange}>*/}
      {/*<ListItemAvatar>*/}
        {/*<Avatar className="avatar">*/}
          {/*<Switch value="checkedA" />*/}
        {/*</Avatar>*/}
      {/*</ListItemAvatar>*/}
      {/*<ListItemText primary="Amy listens to you" />*/}
    {/*</ListItem>*/}
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
