let startBtn = document.querySelector("#speechRecognizationStart");
let EndBtn = document.querySelector("#speechRecognizationEnd");
let textarea = document.querySelector("#speach-Text");
let text = document.querySelector("#speechRecognizationRead");
let answer = document.querySelector("#answer");

// This is my favourite songs list
let songarray = [
  "https://www.youtube.com/watch?v=LH7JdpWZReE",
  "https://www.youtube.com/watch?v=dRr_eF3YifA",
  "https://www.youtube.com/watch?v=KJJ8fKw0Qr4",
  "https://www.youtube.com/watch?v=wu37plN0U9I",
  "https://www.youtube.com/watch?v=6g_TWLZiAhk",
];
const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognization = new SpeechRecognition();

// voice recognization start
// window.onload = recognization.start();
startBtn.addEventListener("click", () => {
  recognization.start();
});

recognization.onstart = function () {
  // console.log("voice recognization starts");
};

// voice recognization result
recognization.onresult = function (listen) {
  let myvoice = listen.resultIndex;
  let mywords = listen.results[myvoice][0].transcript;
  textarea.value = mywords;
  mywords = mywords.toLowerCase();
  // console.log(mywords);

  // This is for Searching purpose
  // If I say something then it will response
  // For Google
  if (
    mywords.includes("open google") ||
    mywords.includes("open youtube") ||
    mywords.includes("open github") ||
    mywords.includes("open vs code") ||
    mywords.includes("open my favourite song") ||
    mywords.includes("open whatsapp") ||
    mywords.includes("what is my name") ||
    mywords.includes("what is my father name") ||
    mywords.includes("what is my hobby") ||
    mywords.includes(`search for`) ||
    mywords.includes(`play`) ||
    mywords.includes("open my github profile") ||
    mywords.includes("who is your creator") ||
    mywords.includes("who is your creater")
  ) {
    if (mywords.includes("open google")) {
      professorVoice("Opening Gogle, sir");
      answer.innerHTML = "Opening Google";
      window.open("https://www.google.com");
    }
    if (mywords.includes("open youtube")) {
      professorVoice("Opening Youtube, sir");
      answer.innerHTML = "Opening Youtube";
      window.open("https://www.youtube.com");
    }
    if (mywords.includes("open github")) {
      professorVoice("Opening Your Github Account, sir");
      answer.innerHTML = "Opening Github";
      window.open("https://www.github.com");
    }
    if (mywords.includes("open vs code")) {
      professorVoice("Opening VS Code, sir");
      answer.innerHTML = "Opening VS Code";
      window.open("https://www.vscode.dev");
    }
    if (mywords.includes("open my favourite song")) {
      professorVoice("Opening your favourite song, sir");
      answer.innerHTML = "Opening Your Favourite Song";

      // console.log(songarray.next().value);
      songarray = songarray[Symbol.iterator]();
      window.open(songarray.next().value);
    }
    if (mywords.includes("open whatsapp")) {
      professorVoice("Opening your whatsapp, sir");
      answer.innerHTML = "Opening Whatsapp";
      window.open("https://web.whatsapp.com/");
    }
    if (mywords.includes("what is my name")) {
      professorVoice("Your name is Mudassir Ameen, sir");
      answer.innerHTML = "Your Name is Mudassir Ameen";
    }
    if (mywords.includes("what is my father name")) {
      professorVoice("I know, Your father name is Ameen Khan, sir");
      answer.innerHTML = "Your Father Name is Ameen Khan";
    }
    if (mywords.includes("what is my hobby")) {
      professorVoice("Your hobby is Web development, sir");
      answer.innerHTML = "Your  Hobby is Web Development";
    }
    if (mywords.includes(`search for`)) {
      professorVoice("Here is Your Search result.");
      mywords = mywords.slice(11, mywords.length);
      console.log(mywords);
      window.open(`https://www.google.com/search?q=${mywords}`);
      answer.innerHTML = " ";
    }
    if (mywords.includes(`play`)) {
      professorVoice("Here is Your Search result.");
      mywords = mywords.slice(5, mywords.length);
      console.log(mywords);
      window.open(`https://www.youtube.com/search?q=${mywords}`);
      answer.innerHTML = " ";
    }
    if (mywords.includes("open my github profile")) {
      professorVoice("Opening your github profile, sir");
      answer.innerHTML = "Opening your github profile.";
      window.open(`https://github.com/Mudassir104`);
    }
    if (
      mywords.includes("who is your creator") ||
      mywords.includes("who is your creater")
    ) {
      console.log("hey");
      professorVoice("My creater is Mudassir Ameen.");
      answer.innerHTML = " Mudassir Ameen is my creater.";
    }
    if (mywords.includes()) {
    }
  } else {
    professorVoice(mywords);
  }
};

recognization.continuous = true;

// voice recognization end
EndBtn.addEventListener("click", () => {
  recognization.stop();
});

recognization.onend = function () {
  // console.log("voice recognization ends");
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

  // console.log(speechSynthesis.getVoices());
}
text.addEventListener("click", () => {
  professorVoice(textarea.value);
});

// First time I have call professor to download the voice
professorVoice(" ");

// Dummy text to speak the message //testing
// professorVoice("hello How are you. Please speak to help me");
