import Editor from './voice-events/Editor'
import EventManager from './voice-events/EventManager'

const editor = new Editor()
const eventManager = new EventManager(editor)

export default {
    init: eventManager.init.bind(eventManager),
    startRecognition: editor.start.bind(editor),
    stopRecognition: editor.stop.bind(editor),
    addEvent: eventManager.addEvent.bind(eventManager)
}
