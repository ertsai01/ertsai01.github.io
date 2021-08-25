document.getElementById('og').classList.remove("hidden");

function show(element) {
	document.getElementById('og').classList.add('hidden');
	document.getElementById('sather').classList.add('hidden');
	document.getElementById('henesys').classList.add('hidden');
	document.getElementById('meme').classList.add('hidden');
	document.getElementById('spirited').classList.add('hidden');
	document.getElementById(element).classList.remove("hidden");
}

function showSather() {
	show('sather');
}

function showHenesys() {
	show('henesys');
}

function showMeme() {
	show('meme');
}

function showSpirited() {
	show('spirited');
}

document.getElementById("satherpic").onclick = showSather;
document.getElementById("henesyspic").onclick = showHenesys;
document.getElementById("memepic").onclick = showMeme;
document.getElementById("spiritedpic").onclick = showSpirited;