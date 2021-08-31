document.getElementById('default').classList.remove("hidden");

function show(element) {
	document.getElementById('default').classList.add('hidden');
	document.getElementById(element).classList.remove("hidden");
}

function hide(element) {
	document.getElementById('default').classList.remove('hidden');
	document.getElementById(element).classList.add("hidden");
}

function showCoffee() {
	show('coffee');
}

function showLaptop() {
	show('laptop');
}

function showPhone() {
	show('phone');
}

document.getElementById("button1").onmouseover = showCoffee;
document.getElementById("button2").onmouseover = showLaptop;
document.getElementById("button3").onmouseover = showPhone;

function hideCoffee() {
	hide('coffee');
}

function hideLaptop() {
	hide('laptop');
}

function hidePhone() {
	hide('phone');
}

document.getElementById("button1").onmouseout = hideCoffee;
document.getElementById("button2").onmouseout = hideLaptop;
document.getElementById("button3").onmouseout = hidePhone;