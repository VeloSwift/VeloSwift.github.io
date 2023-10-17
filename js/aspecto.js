// Escucha los cambios en el estado del checkbox
const themeCheckbox = document.getElementById("themeCheckbox");

themeCheckbox.addEventListener("change", function() {
    
    const contactoLink = document.querySelector("#contacto a");
    const bannerImage = document.getElementById("bannerImage");

    // Cambia el tema de la página según el estado del checkbox
    if (themeCheckbox.checked) {
        document.body.classList.add("dark-mode");
        contactoLink.classList.add("dark-mode");
        bannerImage.src = "/img/banner_night.jpg";
        bannerImage.style.transition = "0.3s";
    } else {
        document.body.classList.remove("dark-mode");
        contactoLink.classList.remove("dark-mode");
        bannerImage.src = "/img/banner_day.jpg";
    }
});
