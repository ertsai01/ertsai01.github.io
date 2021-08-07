const menuContainer = document.getElementById('menu-container');
const menu = document.getElementById('dropmenu');
const button = document.getElementById('dropbutton');


button.addEventListener("mouseover", function(){
	menu.style.display = 'block';
});

menu.addEventListener("mouseleave", function() {
	menu.style.display = 'none'
})



/*
function show(toShow) {
	toShow.style.display = 'block';
}

function dropDown = () => show(menu);

button.onHover = dropDown;
*/