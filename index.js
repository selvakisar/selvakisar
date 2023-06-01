let display = document.getElementById('display');


function appendNum(num) 
{
  display.value += num;
}
function appendfloat(float) 
{
  display.value += float;
}
function memadd(calculate){
  display.value+=calculate+appendNum();
}

function appendOpr(opr)
{
  display.value += opr;
}


function clr() 
{
  display.value = '';
}


function calc() 
{
  var result = eval(display.value);
  display.value = result;
}
function memadd() 
{
  var add=eval(display.value).
 display.value.calc();
}
function memsub() 
{ var sub=eval(calc());
 display.value-=sub;
}