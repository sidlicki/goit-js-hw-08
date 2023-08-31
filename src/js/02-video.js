import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

//
const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);

const time = parseFloat(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(time);

console.dir(time);
