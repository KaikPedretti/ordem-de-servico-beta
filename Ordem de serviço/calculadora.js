// Acesso ao formulário e ao resultado
const form = document.getElementById('calculator-form');
const resultSection = document.getElementById('result');
const fairValueText = document.getElementById('fair-value');

// Evento de envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenção dos valores dos campos
  const hours = parseFloat(document.getElementById('hours').value);
  const difficulty = parseFloat(document.getElementById('difficulty').value);

  // Cálculo do valor justo
  const rate = 40; // Taxa horária do artista 3D (R$40/hora)
  const fairValue = (hours * rate) + (difficulty * 10);

  // Exibição do valor justo
  fairValueText.textContent = `R$ ${fairValue.toFixed(2)}`;

  // Exibição do resultado
  resultSection.classList.remove('hidden');
});
