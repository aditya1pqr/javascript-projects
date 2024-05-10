let input=document.getElementById("inputBox");
let listcontainer=document.querySelector(".listcontainer");

function addtask(){
    if(input.value === ''){
        alert("please enter the task")
    }
    else{
        let li=document.createElement("LI");
        li.innerHTML=input.value;

        listcontainer.appendChild(li);
        
        let span=document.createElement("SPAN");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    savedata();
}
function addremove(e){
    if(e.target.tagName === 'LI')
        {
         e.target.classList.toggle("checked");
         savedata();
        }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }    
}
listcontainer.addEventListener('click',addremove);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showdata()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();