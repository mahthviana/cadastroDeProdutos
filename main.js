var btn = document.querySelector('#send');
btn.addEventListener('click', function(event) {
  event.preventDefault();
  var produto = document.querySelector('#name');
  var valor = produto.value;
  // alert(valor);

  var table = document.querySelector('table');
  var tr = document.createElement('tr');
  var td = document.createElement('td');

  td.innerText = valor;

  table.appendChild(tr);
  tr.appendChild(td);

});