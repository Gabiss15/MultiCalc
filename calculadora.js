const key = "d600c9b7b458ecebc47af9cf5692b9eb"



function calcular(){
    var conta = document.getElementById('entrada')
    var mensagem = document.getElementById('msg')
    
    var res = Number(conta.value) * 0.10

    var fin = res + Number(conta.value)

    mensagem.innerHTML = `Você deve pagar <strong>${fin}</strong> reais`
}

function converter(){
    var fmon = document.getElementsByName('money')
    var moeda = document.getElementById('valor')
    var msg = document.getElementById('time')

    var valor = document.getElementById('button')

    fetch ('http://api.currencylayer.com/live?access_key=d600c9b7b458ecebc47af9cf5692b9eb&format=1')
    .then(response => {
        response.json()
        .then(data => {
            if(fmon[0].checked){
                var res = data['quotes']['USDBRL']
                var convert = Number(res) * Number(moeda.value)
                console.log(convert)
        
                msg.innerHTML = `O valor convertido reais em  fica ${convert}`
            } else if(fmon[1].checked){
                var res = data['quotes']['USDEUR']
                var convert = Number(res) * Number(moeda.value)

                console.log(convert)

                msg.innerHTML = `O valor convertido reais fica ${convert}`
            } else if(fmon[2].checked){
                var res = data['quotes']['USDLYD']
                var convert = Number(res) * Number(moeda.value)

                console.log(convert, res)

                msg.innerHTML = `O valor convertido em reais fica ${convert}`
            } else if(fmon[3].checked){
                var res = data['quotes']['USDRUB']
                var convert = Number(res) * Number(moeda.value)

                console.log(convert, res)
        
                msg.innerHTML = `O valor convertido em reais fica ${convert}`
            }
        })
    })

    .catch(error => {
        console.log(error)
    })
    
}

function escore(){
    var matematica = document.getElementById('mquest')
    var portugues = document.getElementById('pquest')

    var msg = document.getElementById('pontuacao')

    var escorem = [(Number(matematica.value) - 34.3243)/14.316] * 100 + 500
    var escorep = [(Number(portugues.value) - 48.1757)/ 14.0841]  * 100 + 500

    var res = (escorem + escorep)/ 2

    msg.innerHTML = `Seu escore nas provas objetivas foi de ${res}`
}

function resultado(){
    var n1 = document.getElementById('primeirob')
    var n2 = document.getElementById('segundob')
    var n3 = document.getElementById('terceirob')
    var n4 = document.getElementById('quartob')

    var msg = document.getElementById('result')
    var result = document.getElementById('situacao')

    var res = [(Number(n1.value) + Number(n2.value)) * 2 + (Number(n3.value) + Number(n4.value)) * 3]

    var total = res/10

    msg.innerHTML = `Sua média final foi: ${total}`

    if (total >= 60){
        result.innerHTML = 'Parabéns, você foi aprovado(a)'
    } else if (total < 60 && total >= 20){
        result.innerHTML = 'Você está de recuperação, estude!'
    } else if (total < 20){
        result.innerHTML = 'Você reprovou'

    }
}

fetch ('http://api.currencylayer.com/live?access_key=d600c9b7b458ecebc47af9cf5692b9eb&format=1')
    .then(response => {
        response.json()
    })

    .catch(error => {
        console.log(error)
    })