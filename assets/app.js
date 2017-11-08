 //funcionamiento general de la pagina antes del css


window.onload=function(){
   var sendButton= document.getElementsByName("send")[0];  //getElements toma los elementos que coincidan con el Name.
   var twitInput=document.getElementsByName("input")[0];   //y tomara el primer arreglo que aparesca ([0]);
   var timeLine=document.getElementsByName("timeL")[0];
   sendButton.onkeypress=function(){ //onClick es un evento que hara algo cuando el boton en el html se aprete;
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
   		nSpan.textContent= "Lab";
   		dSpan.textContent= new Date();
   		tParr.textContent= twitInput.value;
   		timeLine.insertBefore(tDiv, timeLine.children[0]);
   	}
   }

}