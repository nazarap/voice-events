import VoiceEvent from './../index'
import './styles.css'

//with nested events
VoiceEvent.addEvent(
    'Say Hello',
    null,
    {
        nestedEvents: [
            {
                command: 'world',
                actions: [() => document.getElementById('note-textarea').value = 'Hello, world!']
            },
            {
                command: 'guys',
                actions: [() => document.getElementById('note-textarea').value = 'Hello, guys!']
            }
        ]
    }
)

//simple events
VoiceEvent.addEvent('Say Bye', () => document.getElementById('note-textarea').value = 'Bye, dear!')
VoiceEvent.addEvent('Say Bye Bye guys', () => document.getElementById('note-textarea').value = 'Bye-bye, guys!')

//with params
VoiceEvent.addEvent(
    'Search',
    params => document.getElementById('note-textarea').value = `Search ${params}`,
    { withParams: true })

VoiceEvent.init()

document.getElementById('start-record-btn').addEventListener('click', () => VoiceEvent.startRecognition())
document.getElementById('pause-record-btn').addEventListener('click', () => VoiceEvent.stopRecognition())