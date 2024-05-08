let but1=document.querySelector('.start');
let but2=document.querySelector('.stop');
let but3=document.querySelector('.reset');
let output=document.querySelector('.watch');
 console.log(but1)
 console.log(but2)
 console.log(but3)
 console.log(output)
 let c
 let stop;

 function add(){
    c=0;
    stop=setInterval(adder,1000);
 }
function adder()
{
     c=c+1;
     output.innerHTML=c;
}
function sttp(){
    clearInterval(stop);
}
function rest()
{
    output.innerHTML=0;
    clearInterval(stop);
}

but1.addEventListener('click',add);
but2.addEventListener('click',sttp);
but3.addEventListener('click',rest);

