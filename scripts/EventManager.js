import {
    buildVoiceEvent,
    normalizeText,
    handleEvent
} from "./EventWorker"
import Editor from './Editor'
import LANG from './config/languages'

export default class EventManager {

    constructor(editor = new Editor()) {
        this.editor = editor
        this.events = []
    }

    init(language = LANG.EN) {
        this.editor.init(language)
        this.editor.addEvent('result', speech => this.recognizeCommand(speech))
    }

    addEvent(voiceCommand, callback, args) {
        let voiceEvent = this.events.find(item => item.equals(voiceCommand))
        if (!voiceEvent) {
            this.events.push(buildVoiceEvent(voiceCommand, callback, args))
        } else {
            //TODO: check if nested events changed
            voiceEvent.addAction(callback)
            const index = this.events.findIndex(element => element.equals(voiceCommand))
            this.events[index] = voiceEvent
        }
    }

    recognizeCommand(speech) {
        const statement = normalizeText(speech)
        console.log(statement)
        this.events.forEach(voiceEvent => handleEvent(statement, voiceEvent))
    }
}