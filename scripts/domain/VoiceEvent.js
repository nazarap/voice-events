export default class VoiceEvent {

    constructor(command = '', nestedEvents = [], withParams = false) {
        this.command = command;
        this.actions = [];
        this.nestedEvents = nestedEvents;
        this.withParams = !!withParams;
    }

    addAction(action) {
        this.actions.push(action);
    }

    equals(voiceCommand) {
        return this.command === voiceCommand;
    }

    hasNestedEvents() {
        return this.nestedEvents && this.nestedEvents.length > 0;
    }

    static fromArray(elements) {
        return elements.map(({command, nestedEvents, withParams, actions}) => {
            const voiceEvent = new VoiceEvent(command.toLowerCase(), nestedEvents, withParams);
            this.setActions(voiceEvent, actions);
            return voiceEvent;
        })
    }

    static setActions(voiceEvent, actions) {
        actions.forEach(function (action) {
            voiceEvent.addAction(action);
        });
    }
}