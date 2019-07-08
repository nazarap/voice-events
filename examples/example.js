import VoiceEvent from './../index'
import './styles.css'

//with nested events
VoiceEvent.addEvent(
    'іда',
    null,
    {
        nestedEvents: [
            // {
            //     command: 'включи музику',
            //     actions: [() => {console.log(' i am here '); window.open('https://www.youtube.com/watch?v=qnxB8HVkVYU', '_blank')}]
            // },
            {
                command: 'guys',
                actions: [() => document.getElementById('note-textarea').value = 'Hello, guys!']
            }
        ]
    }
)

//simple events
VoiceEvent.addEvent('включи музику', () => window.open('https://www.youtube.com/watch?v=qnxB8HVkVYU', '_blank'))
VoiceEvent.addEvent('Say Bye Bye guys', () => document.getElementById('note-textarea').value = 'Bye-bye, guys!')

//with params
VoiceEvent.addEvent(
    'Search',
    params => document.getElementById('note-textarea').value = `Search ${params}`,
    { withParams: true })

VoiceEvent.init('uk-UA')

document.getElementById('start-record-btn').addEventListener('click', () => VoiceEvent.startRecognition())
document.getElementById('pause-record-btn').addEventListener('click', () => VoiceEvent.stopRecognition())