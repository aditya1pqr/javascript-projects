let but=document.querySelector("button")

function bgchanger(){
    let h='#';
    for(let i=0;i<6;i++)
    {
        let hex='0123456789ABCDEF';
        
        h=h+hex[Math.round(Math.random()*16)];
       
    }
    console.log(h)
   document.body.style.backgroundColor=h;

}
but.addEventListener('click',bgchanger)
    
