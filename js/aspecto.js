// Escucha los cambios en el estado del checkbox
const themeCheckbox = document.getElementById("themeCheckbox");

themeCheckbox.addEventListener("change", function() {
    // Obtén el elemento <a> dentro de la sección con ID "contacto"
    const contactoLink = document.querySelector("#contacto a");

    // Cambia el tema de la página según el estado del checkbox
    if (themeCheckbox.checked) {
        document.body.classList.add("dark-mode");
        contactoLink.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
        contactoLink.classList.remove("dark-mode");
    }
});
