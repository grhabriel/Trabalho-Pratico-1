let botao = document.querySelector('button');
botao.addEventListener('click',raiz);
botao.addEventListener('click',desenhaGrafico);


function raiz(){
    let coeficienteA = document.getElementById('coeficiente-a');
    let coeficienteB = document.getElementById('coeficiente-b');
    let resposta = document.querySelector('div p');
    resposta.innerText = `A raiz é: ${parseFloat(-coeficienteB.value)/parseFloat(coeficienteA.value)}`;
}

function desenhaGrafico(){
    //checka se o grafico ja foi desenhado.
    let statusGrafico = Chart.getChart("myChart");
    if(statusGrafico != undefined){
        statusGrafico.destroy();
    }


    let coeficienteA = document.getElementById('coeficiente-a');
    let coeficienteB = document.getElementById('coeficiente-b');
    let raiz = parseFloat(-coeficienteB.value)/parseFloat(coeficienteA.value);
    let imagem = [];
    let dominio = [];
    for(let i = parseInt(raiz)-25;i<=parseInt(raiz)+21;i = i+2){
        let resultado =Number(coeficienteA.value*i) + Number(coeficienteB.value);
        dominio.push(i);
        imagem.push(resultado);
    }

    
    let legenda = '';
    if(coeficienteB.value>0){
        legenda = `Gráfico da função ${coeficienteA.value}X  + ${coeficienteB.value}`;
    }
    else{
        legenda = `Gráfico da função ${coeficienteA.value}X  ${coeficienteB.value}`
    }
    
    let ctx = document.getElementById('myChart');
    myChart = new Chart(ctx,{
        type: 'line',
        data: {
            labels: dominio,
            datasets: [{
                label: legenda,
                data: imagem,
                fll:false,
                borderColor: 'rgb(75,192,192)',
                tension:0.1
            }]
        }
    });
}
