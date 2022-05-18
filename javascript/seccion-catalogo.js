document.getElementById('s22+').addEventListener('click', function() {
	var precio_s22 = 4459000;
	var iva_s22 = (precio_s22 * 0.19);
	var precio_total_s22 = precio_s22 + iva_s22;
	alert('Subtotal:          '+ precio_s22 +'\n' + 'Iva:                     '+ iva_s22 + '\n' + 'Precio total:     ' + precio_total_s22  );

	

})