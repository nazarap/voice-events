import { Editor } from './../index'
import './styles.css'

const editor = new Editor()
editor.addEvent('result', result => {
  document.getElementById('note-textarea').value = result;
})

document.getElementById('start-record-btn').addEventListener("click", () => editor.start())

document.getElementById('pause-record-btn').addEventListener("click", () => editor.stop())