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
        let index
        if (!voiceEvent) {
            this.events.push(buildVoiceEvent(voiceCommand, callback, args))
            index = this.events.length - 1
        } else {
            //TODO: check if nested events changed
            voiceEvent.addAction(callback)
            index = this.events.findIndex(element => element.equals(voiceCommand))
            this.events[index] = voiceEvent
        }
        return () => this.events.splice(index, 1)
    }

    addChangeEvent(callback) {
        return this.editor.addEvent('result', callback)
    }

    recognizeCommand(speech) {
        const statement = normalizeText(speech)
        console.log(statement)
        this.events.forEach(voiceEvent => handleEvent(statement, voiceEvent, this.editor))
    }
}