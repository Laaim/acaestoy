// JavaScript
function filterResults() {
  // Obtenemos el valor escrito en la barra de búsqueda
  var searchValue = document.getElementById('search').value.toLowerCase();

  // Obtenemos los valores seleccionados en los filtros
  var petType = document.getElementById('pet-type').value;
  var petCity = document.getElementById('pet-city').value;
  var petColor = document.getElementById('pet-color').value;

  // Iteramos sobre cada una de las respuestas del formulario
  var responses = document.querySelectorAll('.jf-response');
  for (var i = 0; i < responses.length; i++) {
    var response = responses[i];

    // Mostramos o ocultamos la respuesta según corresponda
    if (matchesFilters(response, searchValue, petType, petCity, petColor)) {
      response.style.display = 'block';
    } else {
      response.style.display = 'none';
    }
  }
}

function matchesFilters(response, searchValue, petType, petCity, petColor) {
  // Comprobamos si la respuesta coincide con el valor escrito en la barra de búsqueda
  if (searchValue) {
    var description = response.querySelector('.jf-description').textContent.toLowerCase();
    if (description.indexOf(searchValue) === -1) {
      return false;
    }
  }

  // Comprobamos si la respuesta coincide con el tipo de mascota seleccionado
  if (petType) {
    var type = response.querySelector('.jf-pet-type').textContent.toLowerCase();
    if (type !== petType) {
      return false;
    }
  }

  // Comprobamos si la respuesta coincide con la ciudad seleccionada
  if (petCity) {
    var city = response.querySelector('.jf-pet-city').textContent.toLowerCase();
    if (city !== petCity) {
      return false;
    }
  }

  // Comprobamos si la respuesta coincide con el color de pelaje seleccionado
  if (petColor) {
    var color = response.querySelector('.jf-pet-color').textContent.toLowerCase();
    if (color !== petColor) {
      return false;
    }
  }

  // Si la respuesta coincide con todos los filtros, la devolvemos
  return true;
}
