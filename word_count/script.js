let ipt=document.querySelector('#charcount')
let out=document.querySelector('p');
console.log(ipt)
let val;

function hellow(e){
    let count=0;
    val=e.target.value;
    let ch =val.split(' ');
    for(let i=0;i<ch.length;i++)
        {
            if(ch[i] != '')
                {
                    count+=1;
                    console.log(ch)
                }
        }
    console.log(ch)
    out.innerHTML=count;
}

ipt.addEventListener('input',hellow)