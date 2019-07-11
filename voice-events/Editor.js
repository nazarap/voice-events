import Recognition from './Recognition'
import languages from './config/languages'

export default class Editor {
    constructor() {
        this.recognition = new Recognition()
        this.events = null
        this.result = null
        this.timeout = null
    }

    init(language) {
        console.log(' i am here ')
        this.events = {
            result: []
            , start: []
            , speechend: []
            , error: []
        }
        this.recognition.lang = language
        // this.recognition.continuous = true
        this.recognition.interimResults = true
        this.attachEvents()
    }

    attachEvents() {
        const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList

        const speechRecognitionList = new SpeechGrammarList()
        speechRecognitionList.addFromString('емі', 99999)
        this.recognition.grammars = speechRecognitionList

        this.recognition.onend = () => this.start()
        this.recognition.onresult = event => {
            const current = event.resultIndex
            const transcript = event.results[current][0].transcript
            const mobileRepeatBug = (current === 1 && transcript === event.results[0][0].transcript)

            if (!mobileRepeatBug) {
                const result = transcript.toLowerCase()
                this.result = result
                if (this.timeout) {
                    clearTimeout(this.timeout)
                }
                this.timeout = setTimeout(() => {
                    console.log('events', this.result)
                    const result = this.result
                    this.events.result.forEach(fn => fn(result))
                }, 500)
            }
        }
        this.recognition.onstart = event => this.events.start.forEach(fn => fn(event))
        this.recognition.onspeechend = event => this.events.speechend.forEach(fn => fn(event))
        this.recognition.onerror = event => this.events.error.forEach(fn => fn())
    }

    addEvent(type, callback) {
        this.events[type].push(callback)
        return () => {
            const event = this.events[type]
            event.splice(event.length - 1, 1)
        }
    }

    lang(lang) {
        let langIndex = languages.indexOf(lang)
        if (langIndex === -1) langIndex = 0

        this.recognition.lang = languages[langIndex]
    }

    continuous(flag) {
        return this.recognition.continuous = flag
    }

    start() {
        this.recognition.start()
    }

    stop() {
        this.recognition.stop()
    }
}