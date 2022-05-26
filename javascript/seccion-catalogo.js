(function(){
	const carrito = document.getElementById('boton-carrito');
	const slide = document.getElementById('slide');

	carrito.addEventListener('click', function(){
		slide.classList.toggle('show-slide');
	});

})();



class Producto {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;

	}

}

class usuario{
	agregar_producto(producto) {
		const listaProductos = document.getElementById('lista-articulos');
		const contenedorLista = document.createElement('div');

		contenedorLista.innerHTML = `
		       <div class = "tarjeta">
		            <div class="cuerpo_lista" id ="cuerpolista">
                      <strong>Producto</strong>: ${producto.nombre}<br>
                      <strong>Precio</strong >: $ <div class="costo">${producto.precio}</div>
                      <button name = "borrar" type = "button">Eliminar</button>
		            </div>

		       </div>
		    `;
		    listaProductos.appendChild(contenedorLista);

	};
	eliminar_producto(contenedorLista) {

		if (contenedorLista.name === 'borrar'){
			contenedorLista.parentElement.parentElement.parentElement.remove();
		};

	};
	
}

const elementos = document.getElementsByClassName("boton-comprar")
 for(let el of elementos) {
      el.addEventListener('click', function(){
      	alert('El artículo ha sido añadido al carrito');
	
   const articulo = {};
   const nombre_articulo = event.target.parentElement.parentNode.previousElementSibling.previousElementSibling.textContent;
   const nombre = nombre_articulo.trim() ;
   articulo.nombre_articulo  = nombre;

   const precio_articulo = event.target.parentElement.previousElementSibling.firstChild.textContent;
   const precio = precio_articulo.trim().slice(6);
   articulo.precio_articulo = precio;

   const producto = new Producto(nombre, precio);
   
   const ui = new usuario();
   ui.agregar_producto(producto);
   ui.eliminar_producto();

   
   });
   
 //console.log(producto);
 //console.log(elementos);  
    };  

document.getElementById('lista-articulos').addEventListener('click', function(event){
	console.log(event.target);
   const ui = new usuario ();
   ui.eliminar_producto(event.target);
});
  





//ver totales 
document.getElementById('calc').addEventListener('click', function(event){

	const total = [];
    const items = document.querySelectorAll('.costo');
    
    
    //const items_sinespacios = items.trim();

    items.forEach(function(item){
    	total.push(parseFloat(item.textContent));
    });
    //console.log(total);
    const monto_total = total.reduce(function(total,item){
    	total += item;
    	return total ;
    	/*const iva = total * (0.19);
    	const t = total + iva;*/
    },0)
    //console.log(monto_total);

    tasa_iva= 0.19
    iva = total.map(x => x * tasa_iva);
    //console.log(iva);

        const iva_total = iva.reduce(function(iva,item){
    	iva += item;
    	return iva ;
    	/*const iva = total * (0.19);
    	const t = total + iva;*/
    },0)

    //console.log(iva_total);
    const matriz = [monto_total , iva_total];
    //console.log(matriz); 

    const compra_total = matriz.reduce(function(matriz,item){
    	matriz += item;
    	return matriz;
    	
    },0)
    //console.log(compra_total);
	alert('Subtotal:          Cop   $'+ monto_total +'\n' + 'Iva:                   Cop     $' + iva_total  + '\n' + 'Precio total:     Cop   $' + compra_total );

});