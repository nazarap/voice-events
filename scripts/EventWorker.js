import VoiceEvent from "./domain/VoiceEvent";

const executeActions = (actions, params = []) => {
    actions.forEach(action => action(params));
}

export const handleNestedEvents = (speech, voiceEvents) => {
    voiceEvents.forEach(child => handleEvent(speech, child));
}

export const normalizeText = (text) =>  {
    return text.toLocaleLowerCase();
}

export const buildVoiceEvent = (voiceCommand, callback, args) => {
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

export const handleEvent = (speech, voiceEvent) => {
    const {command, nestedEvents, actions} = voiceEvent;
    if (speech.includes(command)) {
        const nestedStatement =
            speech
                .substring(
                    speech.indexOf(command) + command.length,
                    speech.length);
        if (voiceEvent.hasNestedEvents()) {
            handleNestedEvents(nestedStatement, nestedEvents);
        } else {
            executeActions(actions, nestedStatement);
        }
    }
}