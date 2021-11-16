let titulo = document.querySelector('h3');
titulo.addEventListener('click',mostrar)

function mostrar(){
    let menu = document.querySelector('nav ul');
    if(menu.classList.contains('clicado')){
        menu.classList.remove('clicado');
    }
    else{
        menu.classList.add('clicado');
    }
}