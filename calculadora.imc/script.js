function IMC(){
    var height = Number.parseFloat(document.querySelector('input#height').value);
    var weight = Number.parseFloat(document.querySelector('input#weight').value);
    var result = document.querySelector('div#result');
    let calc = (weight / (height ** 2))

   if(calc < 17){
    result.style.color ='red'
    result.textContent = `Muito abaixo do Peso` + `Seu IMC: ${calc}`
   } else if(calc >= 17 && calc < 18.49){
    result.style.color  = 'yellow'
    result.textContent = 'Abaixo do Peso ' + `Seu IMC: ${calc.toFixed(2)}`
   } else if(calc >= 18.5 && calc < 24.99){
    result.style.color = 'greenyellow'
    result.textContent = 'Peso normal  ' + `Seu IMC: ${calc.toFixed(2)}`
   }else if(calc >= 25 && calc < 29.99){
     result.style.color = 'orange'
     result.textContent = 'Sobrepeso ' + `Seu IMC: ${calc.toFixed(2)}`
   }else if (calc > 30){
    result.style.color = 'red'
    result.textContent = 'Obesidade '+ `Seu IMC: ${calc.toFixed(2)}`
   }else if (isNaN(height) || isNaN(weight)){
    alert('É preciso que valores sejam digitados para calcular!')
   }



  }