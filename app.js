let startBtn = document.querySelector("#speechRecognizationStart");
let EndBtn = document.querySelector("#speechRecognizationEnd");
let textarea = document.querySelector("#speach-Text");

const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognization = new SpeechRecognition();

// voice recognization start
startBtn.addEventListener("click", () => {
  recognization.start();
});

recognization.onstart = function () {
  console.log("voice recognization starts");
};

// voice recognization result
recognization.onresult = function (listen) {
  let myvoice = listen.resultIndex;
  let mywords = listen.results[myvoice][0].transcript;
  console.log(mywords);
  textarea.value = mywords;
  professorVoice(mywords);
};

recognization.continuous = true;

// voice recognization end
EndBtn.addEventListener("click", () => {
  recognization.stop();
});

recognization.onend = function () {
  console.log("voice recognization ends");
};

// function to read the text or our voice. This is the professor voice
function professorVoice(message) {
  // constructor for the voice
  const speech = new SpeechSynthesisUtterance();
  // Different voices of professor
  const allVoices = speechSynthesis.getVoices();
  //   change voice of professor
  speech.voice = allVoices[10];

  // Text that will be read by the professor
  speech.text = message;

  // The volume of professor
  speech.volume = 1;

  // Speech the text
  window.speechSynthesis.speak(speech);

  console.log(speechSynthesis.getVoices());
}
// First time I have call professor to download the voice
professorVoice("");

// Dummy text to speak the message //testing
// professorVoice("hello How are you. Please speak to help me");
