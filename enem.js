let botao = document.querySelector('button');
botao.addEventListener('click',resposta);

function resposta(){
    let respostaA = document.getElementsByName('respostaA');
    let respostaB = document.getElementsByName('respostaB');

    let retornoA = document.getElementById('resposta1');
    let retornoB = document.getElementById('resposta2');
   

    if(respostaA[3].checked){
        retornoA.innerHTML = '<p class="correto">Resposta Correta!</p>'; 
    }
    else{
        retornoA.innerHTML = '<p class="errado">Resposta Errada! Tente novamente</p>';
    }

    if(respostaB[3].checked){
        retornoB.innerHTML = '<p class="correto">Resposta Correta!</p>';
    }
    else{   
        retornoB.innerHTML = '<p class="errado">Resposta Errada! Tente novamente</p>'; ;
    }
    
}