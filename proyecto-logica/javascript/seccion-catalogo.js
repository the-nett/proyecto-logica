
//
//document.getElementById('s22+')
//.addEventListener('click', function(event) {
	//precio_s22 = 4459000;
	//iva_s22 = (precio_s22 * 0.19);
	//precio_total_s22 = precio_s22 + iva_s22;
	//alert('Subtotal:          '+ precio_s22 +'\n' + 'Iva:                     '+ iva_s22 + '\n' + 'Precio total:     ' + precio_total_s22  );

	//
	//console.log( precio_s22, iva_s22, precio_total_s22);
	//event.preventDefault();

//})
//

(function(){
	const botonCarrito = document.getElementById('boton-carrito');
	const slide = document.getElementById('slide');

	botonCarrito.addEventListener('click', function(){
		slide.classList.toggle('show-slide');
	});

})();

// añadir celulares al carrito

(function(){
	const botonComprar = document.querySelectorAll('.boton-comprar');

	botonComprar.forEach(function(boton){
		boton.addEventListener('click', function(event){
			//console.log(event.target);

		if (event.target.parentElement.classList.contains('boton-comprar')) {
			console.log(event.target.parentElement);

		   // let posicion = main.indexof('boton-comprar') +3 ;

		    //console.log(posicion);
		}
		});
	});

})();