import { EventManager } from './../index'
import './styles.css'

const eventManager = new EventManager();
eventManager.addAction("Say Hello", function () {
    document.getElementById('note-textarea').value = "Hello, sweaty!";
});
eventManager.addAction("Say Bye", function () {
    document.getElementById('note-textarea').value = "Bye, dear!";
});
eventManager.init();

document.getElementById('start-record-btn')
    .addEventListener("click", () => {
        eventManager.startRecognition();
        document.getElementById('note-textarea').value = "Recognition started;";
    });

document.getElementById('pause-record-btn')
    .addEventListener("click", () => {
        eventManager.stopRecognition();
        document.getElementById('note-textarea').value = "Recognition finished;";
    });