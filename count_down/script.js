let input=document.getElementById("inputfield");
let out=document.querySelector(".show");
let but=document.querySelector("button");
let but2=document.querySelector(".reset");

let val;
let k
function addvalues(e){
     val=e.target.value
    
    out.innerHTML=val;
    clearInterval(k)
}

function decvalues(){
    input.value="";
     out.style.color='green';
     k=setInterval(()=>{
      val=val-1;
      out.innerHTML=val;
      if(val==0)
        {
            clearInterval(k)
        }
    },1000)
}
function setzero(){
    clearInterval(k);
    out.style.color="red"
    out.innerHTML=0;
}

input.addEventListener('input',addvalues)
but.addEventListener('click',decvalues)
but2.addEventListener('click',setzero)


console.log(input.value)