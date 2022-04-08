
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const div = document.getElementById('div')



add.addEventListener("click",sumar)
sub.addEventListener("click",restar)
div.addEventListener("click",dividir)


function sumar(){
    var x = parseInt(document.getElementById('firstI').value)
    var y = parseInt(document.getElementById('secondI').value)
    
    document.getElementById('resID').innerHTML = x+y;
}

function restar(){
    var x = parseInt(document.getElementById('firstI').value)
    var y = parseInt(document.getElementById('secondI').value)
    
    document.getElementById('resID').innerHTML = x-y;
}
function dividir(){
    var x = parseInt(document.getElementById('firstI').value)
    var y = parseInt(document.getElementById('secondI').value)
    if(y==0){
        document.getElementById('error_text').innerText= 'No se puede dividir por 0'
        document.querySelector('#error').style.display = 'block'
    } else {
        document.getElementById('resID').innerHTML = x/y;
   
    } 
}
    
