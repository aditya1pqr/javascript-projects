let ipt= document.querySelector('#palind');
let out= document.querySelector('p');

function checker(t){
   
   let j=t.length-1;
   for(let i=0;i<j/2;i++)
    {
        let x=t[i];
        let y=t[j-i];
        if(x!=y)
            {
                return false;
            }
         
    }
    return true;
    

}
function newchecker(e)
{
    let val= e.target.value;
   
    let newval=val.toLowerCase();
    
  
    if(checker(newval)==true)
        {
            out.innerHTML="ITS PALINDROME"
            
        }
        else{
            out.innerHTML="NOT PALINDROME"
        }
}
ipt.addEventListener('input',newchecker)
