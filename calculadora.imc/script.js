function IMC(){
    var height = document.querySelector('input#height');
    var hValue = height.value
    var weight = document.querySelector('input#weight');
    var wValue = weight.value
    var result = document.querySelector('div#result');
    var calc = (hValue / (wValue** 2))

   if(calc >= 17 && calc < 18.49){
    result.style.color  = 'yellow'
    result.textContent = 'Abaixo do Peso' + `Seu IMC: ${calc}`
   } else if(calc >= 18.5 && calc < 24.99){
    result.style.color = 'green'
    result.textContent = 'Peso normal : ' + `Seu IMC: ${calc}`
   }else if(calc >= 25 && calc < 29.99){
     result.style.color = 'orange'
     result.textContent = 'Sobrepeso' + `Seu IMC: ${calc}`
   }else if (calc > 30){
    result.style.color = 'red'
    result.textContent = 'Obesidade'+ `Seu IMC: ${calc}`
   }else if (hValue == NaN || wValue == NaN){
    alert('É preciso que valores sejam digitados para calcular!')
   }
}

var button = document.getElementById('btn');
button.addEventListener('click',IMC)