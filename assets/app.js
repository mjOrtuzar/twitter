 //funcionamiento general de la pagina antes del css
window.onload=function(){
   var sendButton= document.getElementsByName("send")[0];  //getElements toma los elementos que coincidan con el Name.
   var twitInput=document.getElementsByName("input")[0]; //textArea  //y tomara el primer arreglo que aparesca ([0]);
   var timeLine=document.getElementsByName("timeL")[0];
   var counter=document.getElementById("contar");

 
   //funcion contador
 twitInput.onkeyup=function(){
   var charLong= 140;
   var resto="";
   var think= twitInput.value.length;
   resto=charLong-think;
   counter.value=resto;
   if(resto >120 && resto<140){
    sendButton.disabled=false;
    counter.style.color="yellow";

   }else if(resto <120 && resto >0){
      sendButton.disabled=false;
      counter.style.color="orange";
   }else if(resto < 0){
      sendButton.disabled =true;
      counter.style.color="red";
   }

 }
  
  //funcion click
   sendButton.onclick=function(){ //onkeypress es un evento que hara algo cuando el boton en el html se aprete;
      if(twitInput.value === ""){          //primera condicion si no se ingresa nada el boton queda deshabilitado.
         sendButton.disabled=true;
      }else{

         var tDiv= document.createElement('div');  //funcionamiento del twitter.
         var nSpan= document.createElement('span');
         var tParr= document.createElement('p');
         tDiv.appendChild(nSpan);
         tDiv.appendChild(tParr);
         tDiv.className="tuit";
         nSpan.textContent= "User ";
         tParr.textContent= twitInput.value;
         timeLine.insertBefore(tDiv, timeLine.children[0]);

      }


   } 

}