import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const WAIT = 1000;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(CURRENT_TIME, seconds);
  }, WAIT)
);

window.addEventListener('DOMContentLoaded', () => {
  let temp = localStorage.getItem(CURRENT_TIME);
  player.setCurrentTime(+(temp === null ? 0 : temp));
});
