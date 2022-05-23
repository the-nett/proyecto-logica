
(function(){
	const menu = document.getElementById('boton-menu');
	const slide = document.getElementById('slide');

	menu.addEventListener('click', function(){
		slide.classList.toggle('show-slide');
	});

})();

