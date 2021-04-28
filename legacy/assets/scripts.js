const music = document.getElementById('music');
const design = document.getElementById('design');
const programming = document.getElementById('programming');

const musButton = document.getElementById('mus');
const desButton = document.getElementById('des');
const proButton = document.getElementById('pro');

show(music, musButton);

function show(element, button) {
	hideAll();
	element.classList.remove('hidden');
}

function hideAll() {
	music.classList.add('hidden');
	design.classList.add('hidden');
	programming.classList.add('hidden');
}

function showMus() {
	hideAll();
	show(music, musButton);
}

function showDes() {
	hideAll();
	show(design, desButton);
}

function showPro() {
	hideAll();
	show(programming, proButton);
}

desButton.onclick = showDes;
musButton.onclick = showMus;
proButton.onclick = showPro;