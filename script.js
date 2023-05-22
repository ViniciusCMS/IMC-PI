function calculateIMC() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultContainer = document.getElementById("result-container");
  
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Converter para metros
  
    if (isNaN(weight) || isNaN(height) || height <= 0) {
      resultContainer.innerText = "Por favor, insira valores válidos para peso e altura.";
      return;
    }
  
    var bmi = weight / (height * height);
  
    var resultMessage = "Seu IMC é " + bmi.toFixed(2) + ". ";
    if (bmi < 18.5) {
      resultMessage += "Você está abaixo do peso.";
    } else if (bmi < 25) {
      resultMessage += "Você está saudável.";
    } else if (bmi < 30) {
      resultMessage += "Você está com sobrepeso.";
    } else {
      resultMessage += "Você está obeso.";
    }
  
    resultContainer.innerText = resultMessage;
  }