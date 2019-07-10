import React from 'react'
import styled from 'styled-components'
import ListItemText from "./LeftBar";

const LoaderStyle = styled.aside`
  #preloader_1{
    margin-top: 4px;
    position:absolute;
    left:50%;
    top:50%;
    background:#ECF0F1;
    
  }
  #preloader_1 span{
    display:block;
    bottom:0;
    width: 3px;
    height: 5px;
    background: #ff6247;
    position:absolute;
    -webkit-animation: preloader_1 1.5s	 infinite ease-in-out;
    -moz-animation: preloader_1 1.5s	 infinite ease-in-out;
    -ms-animation: preloader_1 1.5s	 infinite ease-in-out;
    -o-animation: preloader_1 1.5s	 infinite ease-in-out;
    animation: preloader_1 1.5s	 infinite ease-in-out;
  
  }
  
  #preloader_1 span:nth-child(2){
      left:11px;
      -webkit-animation-delay: .2s;
      -moz-animation-delay: .2s;
      -ms-animation-delay: .2s;
      -o-animation-delay: .2s;
      animation-delay: .2s;
  
  }
  #preloader_1 span:nth-child(3){
      left:22px;
      -webkit-animation-delay: .4s;
      -moz-animation-delay: .4s;
      -ms-animation-delay: .4s;
      -o-animation-delay: .4s;
      animation-delay: .4s;
  }
  #preloader_1 span:nth-child(4){
      left:33px;
      -webkit-animation-delay: .6s;
      -moz-animation-delay: .6s;
      -ms-animation-delay: .6s;
      -o-animation-delay: .6s;
      animation-delay: .6s;
  }
  #preloader_1 span:nth-child(5){
      left:44px;
      -webkit-animation-delay: .8s;
      -moz-animation-delay: .8s;
      -ms-animation-delay: .8s;
      -o-animation-delay: .8s;
      animation-delay: .8s;
  }
  @-webkit-keyframes preloader_1 {
      0% {height:5px;-webkit-transform:translateY(0px);background:#ff6247;}
      25% {height:30px;-webkit-transform:translateY(15px);background:#10c49c;}
      50% {height:5px;-webkit-transform:translateY(0px);background:#ff6247;}
      100% {height:5px;-webkit-transform:translateY(0px);background:#ff6247;}
  }
  
  @-moz-keyframes preloader_1 {
      0% {height:5px;-moz-transform:translateY(0px);background:#ff6247;}
      25% {height:30px;-moz-transform:translateY(15px);background:#10c49c;}
      50% {height:5px;-moz-transform:translateY(0px);background:#ff6247;}
      100% {height:5px;-moz-transform:translateY(0px);background:#ff6247;}
  }
  
  @-ms-keyframes preloader_1 {
      0% {height:5px;-ms-transform:translateY(0px);background:#ff6247;}
      25% {height:30px;-ms-transform:translateY(15px);background:#10c49c;}
      50% {height:5px;-ms-transform:translateY(0px);background:#ff6247;}
      100% {height:5px;-ms-transform:translateY(0px);background:#ff6247;}
  }
  
  @keyframes preloader_1 {
      0% {height:5px;transform:translateY(0px);background:#ff6247;}
      25% {height:30px;transform:translateY(15px);background:#10c49c;}
      50% {height:5px;transform:translateY(0px);background:#ff6247;}
      100% {height:5px;transform:translateY(0px);background:#ff6247;}
  }
`

export default () => {
  return <LoaderStyle>
    <div id="preloader_1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </LoaderStyle>
}
