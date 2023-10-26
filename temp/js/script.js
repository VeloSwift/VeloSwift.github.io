// Obtén todos los elementos con la clase "scroll-button"
const scrollButtons = document.querySelectorAll(".scroll-button");

// Agrega un evento de clic a cada botón
scrollButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
