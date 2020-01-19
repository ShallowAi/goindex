// 初始化播放器
var url = window.location.origin + path;
const dp = new DPlayer({
container: document.getElementById('dplayer'),
lang:'zh-cn',
video: {
url: '${url}',
},
});