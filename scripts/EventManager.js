import {Editor} from './../index'

export default class EventManager {

    constructor() {
        this.editor = new Editor();
        this.eventActionsMap = new Map();
    }

    init() {
        this.editor.addEvent('result', speech => {
            document.getElementById('note-textarea').value = "Recognize: " + speech;
            this.recognizeCommand(speech)
        });
    }

    startRecognition() {
        this.editor.start();
    }

    stopRecognition() {
        this.editor.stop();
    }

    addAction(voiceCommand, callback) {

        const command = EventManager.normalizeText(voiceCommand);
        const actions = this.eventActionsMap.has(command)
            ? this.eventActionsMap.get(command)
            : [];
        actions.push(callback);

        this.eventActionsMap.set(command, actions);
    }

    recognizeCommand(speech) {

        const statement = EventManager.normalizeText(speech);

        this.eventActionsMap.forEach(function(actions, voiceCommand) {
            if (statement.includes(voiceCommand)) {
                EventManager.executeActions(actions);
            }
        });
    }

    static executeActions(actions) {
        actions.forEach(function (action) {
            action();
        });
    }

    static normalizeText(text) {
        return text.toLocaleLowerCase();
    }
}