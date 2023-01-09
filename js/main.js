<script>
  // Obtener todas las tarjetas
  let cards = document.querySelectorAll(".card");

  // Obtener el botón de filtro
  let filterButton = document.querySelector("#filterButton");

  // Agregar un evento de clic al botón de filtro
  filterButton.addEventListener("click", function() {
    // Obtener el tipo de filtro seleccionado
    let filterType = document.querySelector("#filterSelect").value;

    // Recorrer todas las tarjetas
    for (let card of cards) {
      // Si el tipo de filtro es "todos", mostrar todas las tarjetas
      if (filterType == "todos") {
        card.style.display = "block";
      } else {
        // Si el tipo de la tarjeta no coincide con el filtro, ocultarla
        if (card.getAttribute("data-type") != filterType) {
          card.style.display = "none";
        } else {
          // Si el tipo de la tarjeta coincide con el filtro, mostrarla
          card.style.display = "block";
        }
      }
    }
  });
</script>