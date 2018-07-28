var album = 0;
var h2 = document.getElementsByTagName("h2");
var bk = document.getElementById("bk");
var bkAddress = document.getElementById("bkAddress");
var bkSrc = ["bk/TRAN.jpg", "bk/FELT020.jpg", "bk/FELT019.jpg", "bk/FELT018.jpg", "bk/FELT017.jpg"];
var href = ["", "html/ParallelCross.html", "html/RebirthStory.html", "html/SpatialMoving.html", "html/WorldTrick.html"];

//当显示专辑时，将背景虚化
function showBK(k) {
	if (album == k) {
		document.body.style.backgroundImage = "url(bk/FELT017.jpg)";
		bkAddress.style.display = "none";
		bk.setAttribute("src", bkSrc[0]);
		bkAddress.setAttribute("href", href[0]);
		album = 0;
	} else {
		document.body.style.backgroundImage = "url(bk/FELT017blur.jpg)";
		bkAddress.style.display = "inline";
		bk.setAttribute("src", bkSrc[k]);
		bkAddress.setAttribute("href", href[k]);
		album = k;
	}
}

h2[0].onclick = function() {
	showBK(1);
};

h2[1].onclick = function() {
	showBK(2);
};

h2[2].onclick = function() {
	showBK(3);
};

h2[3].onclick = function() {
	showBK(4);
};