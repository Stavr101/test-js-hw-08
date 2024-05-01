import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");

const STORAGE_KEY = "videoplayer - current - time";
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
};
player.on("timeupdate", throttle(onPlay, 1000));

let storageTime;

const currentTime = localStorage.getItem(STORAGE_KEY);
if (currentTime) {
  storageTime = currentTime;
} else {
  storageTime = 0;
}

player
  .setCurrentTime(storageTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        break;

      default:
        break;
    }
  });
