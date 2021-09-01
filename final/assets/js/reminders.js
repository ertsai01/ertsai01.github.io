for (let i = 1; i < 10; i ++) {
	let elem = 'c' + i.toString();
	let element = document.getElementById(elem);
	element.classList.remove('fill')
	element.onclick = function() {
		element.classList.toggle('fill');
	}
}


