// Acesso ao formulário
const form = document.getElementById('service-order-form');

// Evento de envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenção dos valores dos campos
  const name = document.getElementById('name').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const description = document.getElementById('description').value;

  // Criação do objeto da ordem de serviço
  const order = {
    name: name,
    service: service,
    date: date,
    description: description
  };

  // Exemplo de ação com a ordem de serviço (exibição no console)
  console.log(order);

  // Limpar campos do formulário
  form.reset();
});
