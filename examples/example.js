import {EventManager} from './../index'
import './styles.css'

const eventManager = new EventManager();

//with nested events
eventManager.addEvent(
    "Say Hello",
    null,
    {
        "nestedEvents": [
            {
                "command": "world",
                "actions": [function () {
                    document.getElementById('note-textarea').value = "Hello, world!";
                }]
            },
            {
                "command": "guys",
                "actions": [function () {
                    document.getElementById('note-textarea').value = "Hello, guys!";
                }]
            }
        ]
    }
);

//simple events
eventManager.addEvent("Say Bye", function () {
    document.getElementById('note-textarea').value = "Bye, dear!";
});
eventManager.addEvent("Say Bye Bye guys", function () {
    document.getElementById('note-textarea').value = "Bye-bye, guys!";
});

//with params
eventManager.addEvent(
    "Search",
    function (params) {
        document.getElementById('note-textarea').value = "Search " + params;
    },
    {
        "withParams": true
    });


eventManager.init();

document.getElementById('start-record-btn').addEventListener("click", () => eventManager.startRecognition());

document.getElementById('pause-record-btn').addEventListener("click", () => eventManager.stopRecognition());