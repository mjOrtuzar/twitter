 //funcionamiento general de la pagina antes del css


window.onload=function(){
   var sendButton= document.getElementsByName("send")[0];  //getElements toma los elementos que coincidan con el Name.
   var twitInput=document.getElementsByName("input")[0];   //y tomara el primer arreglo que aparesca ([0]);
   var timeLine=document.getElementsByName("timeL")[0];
 //definen variable para contar caracteres
   var longi=140;
   var resto="";
   var obj= document.getElementById('input').value.length;
   resto=longi-obj;
   //funcion contador
   twitInput.onkeyup=function cuenta(){
     if(resto == 140){
      sendButton.disabled=true;
      document.getElementById("contar").style.color=red;
     }else if(resto >130){
      document.getElementById("contar").style.color=yellow;

     }else if(resto >120){
      document.getElementById("contar").style.color=orange;
    }
    document.getElementById('contar').value=resto;
}
  //funcion click
   sendButton.onkeyup=function(){ //onkeypress es un evento que hara algo cuando el boton en el html se aprete;
   	if(twitInput.value === ""){          //primera condicion si no se ingresa nada el boton queda deshabilitado.
   		sendButton.disabled=true;
   	}else{

   		var tDiv= document.createElement('div');  //funcionamiento del twitter.
   		var nSpan= document.createElement('span');
   		var dSpan= document.createElement('span');
   		var tParr= document.createElement('p');
   		tDiv.appendChild(nSpan);
   		tDiv.appendChild(dSpan);
   		tDiv.appendChild(tParr);
   		tDiv.className="tuit";
   		dSpan.textContent= new Date();
   		tParr.textContent= twitInput.value;
   		timeLine.insertBefore(tDiv, timeLine.children[0]);

   	}


   } 

}