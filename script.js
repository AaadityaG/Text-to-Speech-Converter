let speech = new SpeechSynthesisUtterance(); //This Web Speech API interface represents a speech request.
let voices = [];
let voiceSelect = document.querySelector("select");


window.speechSynthesis.onvoiceschanged = setTimeout(() => {
    voices = window.speechSynthesis.getVoices();  // all voices of device
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}, 1000)


document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);   // speech method
})
