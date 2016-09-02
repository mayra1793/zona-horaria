 
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
           function mueveReloj2(){ 
      var hrMex = new Date();
      var hMex = hrMex.getHours()+2; 
      var mMex = hrMex.getMinutes(); 
      var sMex = hrMex.getSeconds();
         var impMex = hMex + " : " + mMex + " : " + sMex;
         document.form_reloj.reloj1.value = impMex;
         setTimeout("mueveReloj2()",1000);
      } 
  
   mueveReloj2();
   window.addEventListener("load", function() { 
     var boton = document.getElementById("horaMex");
      boton.addEventListener("click", function() {
         var hrMex = new Date();
         /* var hrMex = momentoActual.getHours()+2;
         var cadMex = hrMex + " : " + minuto + " : " + segundo;
         document.form_reloj.reloj1.value = cadMex;

      */
   });

  
    /*  var momentoActual = new Date();
      var hora = momentoActual.getHours(); 
      var minuto = momentoActual.getMinutes(); 
      var segundo = momentoActual.getSeconds(); 
      mueveReloj();
   
   var boton = document.getElementById("horaMex");
   boton.addEventListener("click", function() {
      var hrMex = momentoActual.getHours()+2;
       var cadMex = hrMex + " : " + minuto + " : " + segundo;
      document.form_reloj.reloj1.value = cadMex;

   });
});

function mueveReloj(){ 
       var momentoActual = new Date();
      var hora = momentoActual.getHours(); 
      var minuto = momentoActual.getMinutes(); 
      var segundo = momentoActual.getSeconds(); 
      var horaImprimible = hora + " : " + minuto + " : " + segundo;
      document.form_reloj.reloj.value = horaImprimible;
      setTimeout("function()",1000);
   } */
});