import Recognition from './Recognition'
import languages from './config/languages'

export default class Editor {
  constructor () {
    this.recognition = new Recognition();
    this.events = null;
    this.init();
    this.attachEvents();
  }
  init () {
    this.events = {
      result: []
      , start: []
      , speechend: []
      , error: []
    };
    this.recognition.lang = "en-GB";
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
  }
  attachEvents () {
    this.recognition.onresult = event => {
      const current = event.resultIndex
      const transcript = event.results[current][0].transcript
      const mobileRepeatBug = (current === 1 && transcript === event.results[0][0].transcript)

      if(!mobileRepeatBug) {
        const result = transcript.toLowerCase()
        this.events.result.forEach(fn => fn(result))
      }
    };
    this.recognition.onstart = event => this.events.start.forEach(fn => fn(event))
    this.recognition.onspeechend = event => this.events.speechend.forEach(fn => fn(event))
    this.recognition.onerror = event => this.events.error.forEach(fn => fn())
  }
  addEvent (type, callback) {
    this.events[type].push(callback)
  }
  lang (lang) {
    let langIndex = languages.indexOf(lang)
    if (langIndex === -1) langIndex = 0

    this.recognition.lang = languages[langIndex]
  };
  continuous (flag) {
    return this.recognition.continuous = flag
  }
  start () {
    this.recognition.start()
  }
  stop () {
    this.recognition.stop()
  }
}