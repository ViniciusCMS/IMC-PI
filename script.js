function calcularIMC() {
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos.';
      document.getElementById('progresso').style.width = '0%';
      return;
  }

  const imc = peso / (altura * altura);
  const nivelIMC = obterNivelIMC(imc);

  document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)} (${nivelIMC})`;

  const progresso = (imc - 15) * 5; // Escala aproximada
  document.getElementById('progresso').style.width = progresso + '%';
}

function obterNivelIMC(imc) {
  if (imc < 18.5) {
      return 'Abaixo do Peso';
  } else if (imc < 24.9) {
      return 'Peso Normal';
  } else if (imc < 29.9) {
      return 'Sobrepeso';
  } else if (imc < 34.9) {
      return 'Obesidade Grau I';
  } else if (imc < 39.9) {
      return 'Obesidade Grau II';
  } else {
      return 'Obesidade Grau III';
  }
}