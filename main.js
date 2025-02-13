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
const visualizer = document.querySelector(".visualizer");

// create cache
const cache = [
    "./assets/songs/ocean-surf.mp3",
    "./assets/songs/meditation.mp3",
    "./assets/songs/mountain-streams.mp3",
    "./assets/songs/ambient-music.mp3",
    "./assets/songs/rain-and-thunder.mp3"
 ]



let switched = false
let audio = null

button.addEventListener('click', () => {
    // if currently on
        // then stop
    if (!switched){
        // logic to add dog img
        generateRandomDog();
        // play music
        let i = Math.floor(Math.random()*cache.length);
        console.log(cache[i])
        audio = new Audio(`${cache[i]}`)
        audio.loop = true  // loop audio if needed
        audio.volume = 0.7;
        audio.play();
        switched = true;
    } else {
        audio.pause();
        audio = null;
        // update our switched boolean
        switched = false
    }
})


let dogImg;
let oldImg;

// create new random functions for dog images
function generateRandomDog() {
    console.log('fetching dog');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data) => data.json())  // return js object
    .then((data) => {
        // remove current dog element
        oldImg = document.getElementById('dog');
        if (oldImg) {
            oldImg.remove();
        }

        // create img elment
        dogImg = document.createElement('img');
        dogImg.setAttribute('id', 'dog');
        // add url to img src
        console.log(`${data['message']}`)
        // dogImg.setAttribute('src', data['message']);
        // dogImg.setAttribute('src', `url(${data['message']})`);
        // dogImg.style.backgroundImage = `url(${data['message']})`
        // add img element to visualizer div

        // change visualizer class for background color
        visualizer.classList.remove('empty');
        visualizer.classList.add('full');

        visualizer.appendChild(dogImg);
        document.getElementById("dog").src = data['message']
        // udpate opacity
        visualizer.style.opacity = "1";
        console.log('appended');
    }).catch((err) => {
        console.log('Error');
        console.log(err);
});

    // // create img elment
    // dogImg = document.createElement('div');
    // dogImg.setAttribute('id', 'dog');
    // // add url to img src
    // dogImg.setAttribute('src', 'https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg');
    // // add img element to visualizer div
    // visualizer.appendChild(dogImg);
    // // udpate opacity
    // visualizer.style.opacity = "1";
    // console.log('appended');
}