import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import styled from 'styled-components'

const ListStyle = styled(List)`
  && {
    width: 100%;
    padding: 0;

    .content {
      flex: 1 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      
      h6 {
        font-size: 16px;
      }
    }
  }
  
  .menu-items {
    &:first-child {
      padding-top: 0;
    }
    width: 100%;
  }
  
  .card {
    width: 100%;
    display: flex;
    border-radius: 0;
    box-shadow: none;
  }
  .details {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .cover {
    display: flex;
    align-items: center;
    background-color: black;
    width: 151px;
    height: 100px;
  }
  .controls {
    display: flex;
    align-items: center;
    padding-left: theme.spacing(1);
    padding-bottom: theme.spacing(1);
  }
  .playIcon {
    height: 38px;
    width: 38px;
  }
`

export default () => {
  return <ListStyle>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
    <ListItem className="menu-item">
      <Card className="card">
        <CardMedia
          className="cover"
          title="Live from space album cover"><img src="https://i.ytimg.com/vi/MBG3Gdt5OGs/mqdefault.jpg"/></CardMedia>
        <div className="details">
          <CardContent className="content">
            <Typography component="h6" variant="h6">
              Live From Space
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ListItem>
  </ListStyle>
}
