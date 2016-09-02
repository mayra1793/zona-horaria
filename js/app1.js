function mueveReloj(){ 
   	var momentoActual = new Date(); 
   	var hora = momentoActual.getHours(); 
   	var minuto = momentoActual.getMinutes(); 
   	var segundo = momentoActual.getSeconds(); 

   	var horaImprimible = hora + " : " + minuto + " : " + segundo; 

   	document.form_reloj.reloj.value = horaImprimible;

   	setTimeout("mueveReloj()",1000);
} 
mueveReloj();