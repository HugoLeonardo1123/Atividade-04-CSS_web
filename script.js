var ul=document.querySelector('nav ul');
var menubotao = document.querySelector('.menubot i')

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}