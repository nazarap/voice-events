import VoiceEvent from './../index'
import './styles.css'

import YouTubePlayer from 'youtube-player'


let player;
let currentVolume = 50
player = YouTubePlayer('video-player');
// player.loadVideoById('lYa3NAvndDg');
player.setVolume(currentVolume);
// player.playVideo();


//with nested events
VoiceEvent.addEvent(
    'іда',
    null,
    {
        nestedEvents: [
            {
                command: 'включи музику',
                actions: [() => {
                    player.loadVideoById('L4eljjBtlRw');
                    player.playVideo();
                    // console.log(' i am here '); window.open('https://www.youtube.com/watch?v=qnxB8HVkVYU', '_blank')
                }]
            },
            {
                command: 'зупини музику',
                actions: [() => {
                    player.stopVideo();
                }]
            },
            {
                command: 'збільшити звук',
                actions: [() => {
                    currentVolume += 10
                    player.setVolume(currentVolume);
                }]
            },
            {
                command: 'зменшити звук',
                actions: [() => {
                    currentVolume -= 10
                    player.setVolume(currentVolume);
                }]
            }
        ]
    }
)

//simple events
// VoiceEvent.addEvent('включи музику', () => window.open('https://www.youtube.com/watch?v=qnxB8HVkVYU', '_blank'))
VoiceEvent.addEvent('Say Bye Bye guys', () => document.getElementById('note-textarea').value = 'Bye-bye, guys!')

//with params
VoiceEvent.addEvent(
    'Search',
    params => document.getElementById('note-textarea').value = `Search ${params}`,
    { withParams: true })

VoiceEvent.init('uk-UA')

document.getElementById('start-record-btn').addEventListener('click', () => VoiceEvent.startRecognition())
document.getElementById('pause-record-btn').addEventListener('click', () => VoiceEvent.stopRecognition())