
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const div = document.getElementById('div')



add.addEventListener("click",sumar)
sub.addEventListener("click",restar)
div.addEventListener("click",dividir)

//Funciones para obtener los dos valores A y B
function getFirstElem(){
    return parseInt(document.getElementById('firstI').value)
}
function getSecondEleme(){
    return parseInt(document.getElementById('secondI').value)
}


function check(){
    document.querySelector('#error').style.display = 'none' 
    return (document.getElementById('secondI').value == '') ||  (document.getElementById('firstI').value == '')
}

function sumar(){
    !check() ? document.getElementById('resID').innerHTML = getFirstElem() + getSecondEleme() : incomplete();
}


function restar(){
    !check() ? document.getElementById('resID').innerHTML = getFirstElem() - getSecondEleme() : incomplete();
}

function dividir(){
    if(!check()){
        if(getSecondEleme()==0){
            document.getElementById('error_text').innerText= 'No se puede dividir por 0'
            document.querySelector('#error').style.display = 'block'
        } else {
            document.getElementById('resID').innerHTML = getFirstElem()/getSecondEleme();
        } 
    }
    else {
        incomplete();
    }
    
}
function incomplete(){
    document.getElementById('error_text').innerText= 'Complete los campos'
    document.querySelector('#error').style.display = 'block'

}
