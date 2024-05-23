//Open extension -> button for random ambient sound
//ambient sound cache 


// html file will have a button on it to randomize a song selection

// select a song

// instruct the browser to begin playing sound
//<audio>
//<source> attribute set to name of mp3
//add controls within the opening <audio> tag 

// incorporate a visualizer (maybe use some AI)?

// maybe use spotify

// console.log(Audio);
// console.log(chrome);

// let myAudio = new Audio(chrome.runtime.getURL("./assets/songs/ocean-surf.mp3"));

const button = document.querySelector(".btn-random");

// create cache
const cache = ["./assets/songs/ocean-surf.mp3", "./assets/songs/meditation.mp3", "./assets/songs/mountain-streams.mp3"]

let switched = false
let audio = null

button.addEventListener('click', () => {
    // if currently on
        // then stop
    if (!switched){
        let i = Math.floor(Math.random()*3);
        console.log(cache[i])
        audio = new Audio(`${cache[i]}`)
        audio.play();
        switched = true
    } else {
        audio.pause();
        audio = null;
        // update our switched boolean
        switched = false
    }
})

// randomVlaue * number of discrete CSSMathValue

// .01 * Array.length