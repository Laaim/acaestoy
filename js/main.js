// Función que se ejecuta al enviar el formulario
function filtrar() {
  // Obtener valores de los campos del formulario
  let tipo = document.getElementById('tipo').value;
  let pelaje = document.getElementById('pelaje').value;
  let ciudad = document.getElementById('ciudad').value;

  // Obtener todas las cards
  let cards = document.getElementsByClassName('card');

  // Recorrer cada card
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let info = card.getElementsByClassName('info')[0];

    // Obtener valores de la card
    let tipoCard = info.getElementsByTagName('span')[0].innerHTML;
    let pelajeCard = info.getElementsByTagName('span')[1].innerHTML;
    let ciudadCard = info.getElementsByTagName('span')[2].innerHTML;

    // Mostrar la card si cumple con todos los filtros o si no hay filtros seleccionados
    if ((tipo == tipoCard || tipo == "") && (pelaje == pelajeCard || pelaje == "") && (ciudad == ciudadCard || ciudad == "")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

// Añadir evento submit al formulario
document.getElementById('formulario').addEventListener('submit', filtrar);
