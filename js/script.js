window.addEventListener("load", start);
window.addEventListener("resize", windowResize);
window.addEventListener("load", windowResize);
let points;
let liv;

function windowResize() {
  console.log("windowResize");
  let widthScreen = document.querySelector("#baggrundsfarve").clientWidth;
  let myFontInPercent1 = 3.5;
  let myFont1 = (widthScreen / 100) * myFontInPercent1;
  document.querySelector(".blok").style.fontSize = myFont1 + "px";
  document.querySelector(".formel").style.fontSize = myFont1 + "px";
  let myFontInPercent2 = 2;
  let myFont2 = (widthScreen / 100) * myFontInPercent2;
  document.querySelector("#tekst").style.fontSize = myFont2 + "px";
  let myFontInPercent3 = 2.7;
  let myFont3 = (widthScreen / 100) * myFontInPercent3;
  document.querySelector("#citat").style.fontSize = myFont3 + "px";
  let myFontInPercent4 = 1.2;
  let myFont4 = (widthScreen / 100) * myFontInPercent4;
  document.querySelector("#billedetekst").style.fontSize = myFont4 + "px";
}
function start() {
  // *** First challenge
  // No javascript needed for first challenge

  // *** Second challenge
  // Grab the video_file element
  // Grab the play element
  // Grab the stop element
  // Add eventlistener to the play element (function playVideo)
  // Add eventlistener to the stop element (function stopVideo)
  const video = document.querySelector("#video_file");
  video.addEventListener("click", playVideo);
  const stopBtn = document.querySelector("#stop");
  stopBtn.addEventListener("click", stopVideo);
  const playBtn = document.querySelector("#play");
  playBtn.addEventListener("click", playVideo);

  // *** Third challenge
  // Grab the slowdown element
  // Grab the speedup element
  // Add eventlistener to the slowdown element (function slowDownVideo)
  // Add eventlistener to the speedup element (function speedUpVideo)
  const slowdownBtn = document.querySelector("#slowdown");
  slowdownBtn.addEventListener("click", slowDownVideo);
  const speedupBtn = document.querySelector("#speedup");
  speedupBtn.addEventListener("click", speedUpVideo);

  // *** Fourth challenge
  // Grab the rate element
  // Grab the volume element
  // Add eventlistener to the volume (function changeVolume)
  const volSlider = document.querySelector("#volControl");
  volSlider.addEventListener("change", changeVolume);

  // *** Fifth challenge
  // No javascript needed

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url(img/pause.svg)";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(img/play.svg)";
    }
  }
  function stopVideo() {
    video.pause();
    video.currentTime = 0;
  }
  function slowDownVideo() {
    if (video.playbackRate >= 0.25) {
      video.playbackRate -= 0.25;
      document.querySelector("#playbackrate").textContent = video.playbackRate;
    }
  }
  function speedUpVideo() {
    video.playbackRate += 0.25;
    document.querySelector("#playbackrate").textContent = video.playbackRate;
  }
  function changeVolume() {
    let newVolume = volSlider.value / 100;
    video.volume = newVolume;
  }
}
