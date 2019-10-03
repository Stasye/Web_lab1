function selectOnlyThis(id){
  var answer = document.getElementsByName("x");
  Array.prototype.forEach.call(answer,function(el){
    el.checked = false;
  });
  id.checked = true;
}

function check() {
  var validatedX= checkX();
  var validatedY= checkY();
  var validatedR=checkR();
  return (validatedX&&validatedY&&validatedR);
 }

function checkX(){
  var x;
  var check=false;
  var elem = document.getElementById("one");
  var boxes = document.getElementById("boxes");
  var elems = boxes.getElementsByTagName ( "input" );
  var len = elems.length;
  for ( var i = 0; i < len; i++ ){
        if ( elems[i].type == "checkbox" ){
          if (elems[i].checked){
      x=elems[i].value;     
      check=true;
          }  
        }
  }
 
  if(!check) {
  elem.innerHTML="Выберите значение из предложенных";
  } else { 
    elem.innerHTML="Координата X = "+x; 
    elem.style.color="#194DBB";
    }
  return check; 
}
function pressEnter(e){
	if(e.keyCode == 13)
		return false;
}

function checkY(){
 var inputY=document.getElementById("inputY");
  var y=document.getElementById("textinput").value.replace(/\s+/g, '').replace(/,/, '.');
  var elem = document.getElementById("two");
  if (y==""){
    elem.innerHTML="Поле обязательно для заполнения";
    elem.style.color="red";
    return false;
  } else if (!/^[+-]?[0-9]+[.]?[0-9]*$/.test(y)){   
    elem.innerHTML="Введите числовое значение";
    elem.style.color="red";
    return false;
  }else if ((y>5)||(y<-5)) {
    elem.innerHTML="Введите значение в диапазоне [-5...5]";
    elem.style.color="red";
    return false;
  } else {
    elem.innerHTML="Координата Y = "+y;
    elem.style.color="#194DBB";
    return true;
  }
}

var R = 0;

function pressR(value){
  var elem = document.getElementById("three");
  R=value;
  elem.innerHTML="Параметр R = "+value;
  elem.style.color="#194DBB";
}

function checkR(){
  var elem = document.getElementById("three");
  document.getElementById('r0').value = R;
  if (R==0) {
    elem.innerHTML="Выберите параметр R";
    elem.style.color="red";
    return false;
  } else return true;
}