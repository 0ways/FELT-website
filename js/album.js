var player = document.getElementById("player");
var copylink = document.getElementById("copy");
var songlink = document.getElementById("link");

songlink.style.display = "none";

console.log(player.controls);
console.log(player.currentSrc);
console.log(player.paused);
/*
//音乐不在播放时，将背景恢复
function clearBK() {
	document.body.style.backgroundImage = "url(../bk/FELT019.jpg)";
	console.log("clear");
}

//音乐正在播放时，将背景虚化
function blurBK() {
	document.body.style.backgroundImage = "url(../bk/FELT019blur.jpg)";
	console.log("blur");
}

player.onplay = function() {
	blurBK();
}

player.onpause = function() {
	clearBK();
}
*/

var clipboardswfdata;
            
var copy = function(){
    clipboardswfdata = window.location.href;
    var href = clipboardswfdata.split("html/");
    var song = player.src.split("FELT-INTR/");

    try {
    	window.clipboardData.setData('str', clipboardswfdata);
    }
    catch(error) {
        alert("浏览器不支持，请手动复制文本框内的里链接 (´・ω・`)     ");
        songlink.value = href[0] + song[1]; 
        songlink.style.display = "inline";
    }
}

copylink.onclick = function() {
	copy();
}