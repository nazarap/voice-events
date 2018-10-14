import Editor from "./scripts/Editor";
import EventManager from "./scripts/EventManager";

const editor = new Editor()
const eventManager = new EventManager(editor)

export default {
    init: eventManager.init.bind(eventManager),
    startRecognition: editor.start.bind(editor),
    stopRecognition: editor.stop.bind(editor),
    addEvent: eventManager.addEvent.bind(eventManager)
}
