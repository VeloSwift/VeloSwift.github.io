// Escucha los cambios en el estado del checkbox
const themeCheckbox = document.getElementById("themeCheckbox");

themeCheckbox.addEventListener("change", function() {
    
    const contactoLink = document.querySelector("#contacto a");
    const bannerLink = document.querySelector("#texto_banner");
    const button_sLink = document.querySelector("#button_s");
    const bannerImage = document.getElementById("bannerImage");

    // Cambia el tema de la página según el estado del checkbox
    bannerImage.style.transition = "opacity 0.3s"; // Agrega la transición de opacidad
    if (themeCheckbox.checked) {
        document.body.classList.add("dark-mode");
        contactoLink.classList.add("dark-mode");
        bannerLink.classList.add("dark-mode");
        button_sLink.classList.add("dark-mode");
        bannerImage.style.opacity = "0"; // Oculta la imagen
        setTimeout(function() {
            bannerImage.src = "/img/banner_night.jpg";
            bannerImage.style.opacity = "1"; // Muestra la nueva imagen
        }, 150); // Después de 0.3 segundos (corresponde a la duración de la transición)

    } else {
        document.body.classList.remove("dark-mode");
        contactoLink.classList.remove("dark-mode");
        bannerLink.classList.remove("dark-mode");
        button_sLink.classList.remove("dark-mode");
        bannerImage.style.opacity = "0";
        setTimeout(function() {
            bannerImage.src = "/img/banner_day.jpg";
            bannerImage.style.opacity = "1";
        }, 150);
    }
});

