//Declaração de variaveis/constantes.
const numero = document.querySelectorAll('#numero');
const resultado = document.querySelector('.resultado');
const res = document.getElementById('res')
const adicao = document.getElementById('mais');
const tela = document.getElementById('tela');
const operador = document.querySelectorAll('#operador')
const igual = document.getElementById('igual')
const deletar = document.querySelectorAll('#deletar')

//Adicionando Listeners.
numero.forEach(function(val){
    val.addEventListener("click", mostraValores);
})
operador.forEach(function(val){
    val.addEventListener("click", operacao)
})
igual.addEventListener("click", MostrarResultado)
deletar.forEach(function(val){
    val.addEventListener("click", DeletarReset)
})

//Variaveis com um valor padrão.
let valor1 = 0
let valor2 = 0
let valorAtual = 0
let operadorTipo = ''

//MostrarValores() faz com que o numero digitado apareca na tela.
//atribui o valor passado á variavel valorAtual.
function mostraValores(event){
    numero.forEach(function(val){
        if(event.target.innerHTML == val.innerHTML){
            tela.innerHTML += event.target.innerHTML
            valorAtual = parseFloat(tela.innerHTML)
        }
    }) 
}

//operacao() faz com que ao selecionar o operador(+,-,/ e *), o valor da variavel valorAtual passa para valor1.
//valorAtualo é zerado.
//È mostrado na tela a operação a ser feita, faltando o valor2.
function operacao(event){
    operador.forEach(function(val){
        if(event.target.innerHTML == val.innerHTML){
            valor1 = valorAtual;
            valorAtual = 0
            if(valor1 != 0 && valor2 != 0 && tela.innerHTML == ''){
                valor1 = parseFloat(res.innerHTML)
            }
            if(event.target.innerHTML == '+'){
                if(tela.innerHTML == '' && res.innerHTML != ''){
                    res.innerHTML = res.innerHTML + ' +'
                }else{
                    res.innerHTML = tela.innerHTML + ' +'
                    tela.innerHTML = ''
                }
                operadorTipo = '+'
            }else if(event.target.innerHTML == '-'){
                if(tela.innerHTML == '' && res.innerHTML != ''){
                    res.innerHTML = res.innerHTML + ' -'
                }else{
                    res.innerHTML = tela.innerHTML + ' -'
                    tela.innerHTML = ''
                }
                operadorTipo = '-'
            }else if(event.target.innerHTML == 'X'){
                if(tela.innerHTML == '' && res.innerHTML != ''){
                    res.innerHTML = res.innerHTML + ' X'
                }else{
                    res.innerHTML = tela.innerHTML + ' X'
                    tela.innerHTML = ''
                }
                operadorTipo = 'X'
            }else if(event.target.innerHTML == '/'){
                if(tela.innerHTML == '' && res.innerHTML != ''){
                    res.innerHTML = res.innerHTML + ' /'
                }else{
                    res.innerHTML = tela.innerHTML + ' /'
                    tela.innerHTML = ''
                }
                operadorTipo = '/'
            }
        }
    })
}

//MostrarResultado() faz com que o valor de valorAtual passe para valor2.
//assim pode ser cuncluida a operação.
//dependendo do tipo de operador(operadorTipo), a variavel result é criada.
//result é o resultado da operação a ser feita.
//result aparece na tela.
function MostrarResultado(){
    valor2 = valorAtual
    if(operadorTipo == '+'){
        let result = valor1 + valor2
        res.innerHTML = result
    }else if(operadorTipo == '-'){
        let result = valor1 - valor2
        res.innerHTML = result
    }else if(operadorTipo == 'X'){
        let result = valor1 * valor2
        res.innerHTML = result
    }else if(operadorTipo == '/'){
        let result = valor1 / valor2
        res.innerHTML = result
    }
    tela.innerHTML = ''
    operadorTipo = ''
}

//DeletarReset() executa uma função de apagar o ultimo digito do valor ou resetar todos os valores.
function DeletarReset(event){
    deletar.forEach(function(val){
        if(event.target.innerHTML == val.innerHTML){
            if(event.target.innerHTML == 'C'){
                    valor1 = 0;
                    valor2 = 0;
                    valorAtual = 0;
                    operadorTipo = '';
                    tela.innerHTML = '';
                    res.innerHTML = '';
                }else if(event.target.innerHTML == '<i class="fa-solid fa-delete-left"></i>'){
                    let valor = tela.innerHTML
                    let del = valor.substring(0, valor.length - 1)
                    tela.innerHTML = del 
                    valorAtual = parseFloat(tela.innerHTML)
                }
        }
    })
}


//Mais variaveis/constantes porem para outra parte da pagina.
const cor1 = document.querySelector('.cor1')
const cor2 = document.querySelector('.cor2')
const circolorido = document.querySelector('.circulo-colorido');
const esconder = document.querySelector('.esconder');


cor1.addEventListener("input", mudarGradiante);
cor2.addEventListener("input", mudarGradiante);
circolorido.addEventListener("click", esconderMostrar)

//mudarGradiante() muda o background de acordo com a cor selecionada no input.
function mudarGradiante() {
    document.body.style.background = "radial-gradient(circle, " + cor1.value + " 0%, " + cor2.value + " 100%)";
}

//esconderMostrar() altera o display de esconder pra 'none' ou 'block'.
function esconderMostrar(){
    if(esconder.style.display =='none'){
        esconder.style.display = 'block'
    }else{
        esconder.style.display = 'none'
    }
}
