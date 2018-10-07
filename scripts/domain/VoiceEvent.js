export default class VoiceEvent {

    constructor(command, nestedEvents, withParams) {
        this.command = command || '';
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
        return elements.map(item =>{
            const voiceEvent = new VoiceEvent(item.command.toLowerCase(), item.nestedEvents, item.withParams);
            item.actions.forEach(function (action) {
                voiceEvent.addAction(action);
            });
            return voiceEvent;
        })
    }
}