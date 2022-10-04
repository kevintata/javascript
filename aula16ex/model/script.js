let num = document.querySelector("input#fnum")
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, I){
    if (I.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){

    } else {
        window.alert('Invalid number or already in list.')
    }
}