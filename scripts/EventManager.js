import {Editor} from './../index'
import VoiceEvent from "./domain/VoiceEvent";

export default class EventManager {

    constructor() {
        this.editor = new Editor();
        this.events = [];
    }

    init() {
        this.editor.addEvent('result', speech => {
            this.recognizeCommand(speech)
        });
    }

    startRecognition() {
        this.editor.start();
    }

    stopRecognition() {
        this.editor.stop();
    }

    addEvent(voiceCommand, callback, args) {

        let voiceEvent = this.events.find(item => item.equals(voiceCommand));

        if (!voiceEvent) {
            this.events.push(EventManager.buildVoiceEvent(voiceCommand, callback, args));
        } else {
            //TODO: check if nested events changed
            voiceEvent.addAction(callback);
            this.events[EventManager.findIndex(this.events, voiceCommand)] = voiceEvent;
        }
    }

    recognizeCommand(speech) {

        const statement = EventManager.normalizeText(speech);

        this.events.forEach(function (voiceEvent) {
            EventManager.handleEvent(statement, voiceEvent);
        });
    }

    static handleEvent(speech, voiceEvent) {

        if (speech.includes(voiceEvent.command)) {

            const nestedStatement =
                speech
                    .substring(
                        speech.indexOf(voiceEvent.command) + voiceEvent.command.length,
                        speech.length);

            if (voiceEvent.withParams) {
                EventManager.executeActionsWithParams(voiceEvent.actions, nestedStatement);
            } else if (voiceEvent.hasNestedEvents()) {
                EventManager.handleNestedEvents(nestedStatement, voiceEvent.nestedEvents);
            } else {
                EventManager.executeActions(voiceEvent.actions);
            }
        }
    }

    static handleNestedEvents(speech, voiceEvents) {
        voiceEvents.forEach(function (child) {
            EventManager.handleEvent(speech, child);
        });
    }

    static executeActionsWithParams(actions, params) {
        actions.forEach(function (action) {
            action(params);
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

    static findIndex(arr, voiceCommand) {

        let index = -1;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].equals(voiceCommand)) {
                index = i;
                break;
            }
        }

        return index;
    }

    static buildVoiceEvent(voiceCommand, callback, args) {
        let nestedEvents = null;
        let withParams = null;
        if (args) {
            nestedEvents = args.nestedEvents ? VoiceEvent.fromArray(args.nestedEvents) : null;
            withParams = args.withParams;
        }
        const voiceEvent = new VoiceEvent(voiceCommand.toLowerCase(), nestedEvents, withParams);
        voiceEvent.addAction(callback);
        return voiceEvent;
    }
}